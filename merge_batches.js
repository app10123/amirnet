const fs = require('fs');

const aiData = JSON.parse(fs.readFileSync('ai_completed_data.json', 'utf-8'));
const before = Object.keys(aiData).length;

// Merge a batch object into aiData
function mergeBatch(batch) {
  let added = 0;
  for (const [word, data] of Object.entries(batch)) {
    if (!aiData[word] && data.assoc && data.sentence) {
      aiData[word] = data;
      added++;
    }
  }
  return added;
}

// Load all batch result files
const batchFiles = fs.readdirSync('.').filter(f => f.startsWith('batch_result_') && f.endsWith('.json'));
console.log('Found batch result files:', batchFiles.length);

let totalAdded = 0;
for (const file of batchFiles) {
  try {
    const batch = JSON.parse(fs.readFileSync(file, 'utf-8'));
    const added = mergeBatch(batch);
    console.log(file, ':', added, 'words added');
    totalAdded += added;
  } catch(e) {
    console.log(file, ': ERROR -', e.message);
  }
}

fs.writeFileSync('ai_completed_data.json', JSON.stringify(aiData, null, 2), 'utf-8');
console.log('\nTotal added:', totalAdded);
console.log('Before:', before, '-> After:', Object.keys(aiData).length);
