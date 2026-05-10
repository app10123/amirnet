const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const API_KEY = process.env.ANTHROPIC_API_KEY || process.argv[2];
if (!API_KEY) {
  console.error('Usage: node generate_assoc.js <API_KEY>');
  console.error('Or set ANTHROPIC_API_KEY environment variable');
  process.exit(1);
}

const client = new Anthropic({ apiKey: API_KEY });

const BATCH_SIZE = 50;
const DELAY_MS = 1000;
const PROGRESS_FILE = 'assoc_progress.json';
const OUTPUT_FILE = 'ai_completed_data.json';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return { processedCount: 0 };
}

function saveProgress(count) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ processedCount: count }));
}

async function generateAssocForBatch(words) {
  const wordList = words.map(w => `${w.en} | ${w.he}`).join('\n');

  const prompt = `אתה מומחה לזיכרון ולשיטות לימוד. צור אסוציאציות בעברית למילים האנגליות הבאות.

הפורמט של האסוציאציה צריך להיות:
- משפט יצירתי בעברית שמחבר את הצליל האנגלי למשמעות העברית
- שימוש במשחקי מילים, ראשי תיבות, או קשר פונטי
- קצר, מצחיק וקל לזכור

דוגמאות לסגנון:
- ability = "אבי לי, תביא לי יכולת!"
- argue = "אל תתווכח איתי שזה ארגז (Argue), אני טוען שזה קרטון!"
- ask = "האסקימוסי ביקש קרמבו."
- average = "אבי-רג' הוא בסך הכל גבר ממוצע."
- compare = "בוא 'קום' (com) ונהיה 'פייר' (pair - זוג) כדי שנוכל להשוות."

מילות יחס ומילות חיבור - השתמש בנוסחה: "מילה — WORD = תרגום = משמעות"
דוגמאות:
- due to = "דיו טו — DUE = מגיע, due to = מגיע בגלל = עקב"
- since = "סינס — SINCE = מאז, also = מכיוון ש, since when? = מאימתי?"

המילים לעיבוד (פורמט: אנגלית | עברית):
${wordList}

החזר JSON בלבד, ללא טקסט נוסף, בפורמט:
{
  "word_en": {
    "assoc": "האסוציאציה בעברית",
    "sentence": "Example sentence in English.|תרגום לעברית."
  }
}

חשוב:
- המפתח הוא המילה האנגלית בדיוק כפי שהופיעה
- המשפטים צריכים להיות בגובה תלמידי תיכון (לא מסובך מדי)
- האסוציאציה חייבת לכלול את המשמעות העברית
- JSON תקין בלבד`;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 8000,
    messages: [{ role: 'user', content: prompt }]
  });

  const text = response.content[0].text.trim();

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in response');

  return JSON.parse(jsonMatch[0]);
}

async function main() {
  const missingWords = JSON.parse(fs.readFileSync('missing_custom_words.json', 'utf-8'));
  const aiData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));

  const progress = loadProgress();
  let startFrom = progress.processedCount;

  console.log(`Total missing words: ${missingWords.length}`);
  console.log(`Already processed: ${startFrom}`);
  console.log(`Remaining: ${missingWords.length - startFrom}`);
  console.log(`Batch size: ${BATCH_SIZE}`);
  console.log('');

  let processed = startFrom;
  let errors = 0;

  for (let i = startFrom; i < missingWords.length; i += BATCH_SIZE) {
    const batch = missingWords.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(missingWords.length / BATCH_SIZE);

    process.stdout.write(`Batch ${batchNum}/${totalBatches} (${batch[0].en} ... ${batch[batch.length-1].en})... `);

    try {
      const result = await generateAssocForBatch(batch);

      // Merge into aiData
      let added = 0;
      for (const [word, data] of Object.entries(result)) {
        if (!aiData[word]) {
          aiData[word] = data;
          added++;
        }
      }

      processed += batch.length;
      console.log(`✓ Added ${added} words (total: ${Object.keys(aiData).length})`);

      // Save progress every batch
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(aiData, null, 2), 'utf-8');
      saveProgress(processed);

    } catch (err) {
      errors++;
      console.log(`✗ Error: ${err.message}`);
      // Don't advance progress on error - will retry on next run
      if (errors > 5) {
        console.error('Too many errors, stopping.');
        break;
      }
    }

    if (i + BATCH_SIZE < missingWords.length) {
      await sleep(DELAY_MS);
    }
  }

  console.log('');
  console.log(`Done! Total words in aiData: ${Object.keys(aiData).length}`);
  console.log(`Errors: ${errors}`);

  if (fs.existsSync(PROGRESS_FILE)) {
    fs.unlinkSync(PROGRESS_FILE);
  }

  // Clean up temp files
  for (let i = 1; i <= 8; i++) {
    const f = `batch_${i}.txt`;
    if (fs.existsSync(f)) fs.unlinkSync(f);
  }
}

main().catch(console.error);
