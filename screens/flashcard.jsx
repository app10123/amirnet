// flashcard.jsx — Flashcard study screen (front view, single card focus).

function FlashcardScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe }}>
      <div style={{ padding: '4px 18px 110px', display: 'flex', flexDirection: 'column',
        height: '100%', boxSizing: 'border-box' }}>

        {/* Top: counter + progress */}
        <div style={{ padding: '8px 4px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: t.c.muted, fontWeight: 600 }}>
              שינון ממוקד · Unit 4
            </span>
            <span style={{ fontFamily: t.fontEn, fontSize: 14, fontWeight: 700,
              color: t.c.ink2, fontVariantNumeric: 'tabular-nums' }}>
              4 / 10
            </span>
          </div>
          <ProgressBar t={t} value={40} height={3}/>
        </div>

        {/* The card itself */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '8px 0 18px' }}>
          <Card t={t} pad={0} style={{
            width: '100%', minHeight: 380,
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* faint level/unit watermark, top corner */}
            <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                color: t.accent, padding: '4px 8px', borderRadius: 999,
                background: t.accentSoft }}>UNIT 4</span>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                color: t.c.ink2, padding: '4px 8px', borderRadius: 999,
                background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)' }}>MEDIUM</span>
            </div>

            {/* Pronunciation/audio in the other corner */}
            <div style={{ position: 'absolute', top: 18, right: 18,
              width: 36, height: 36, borderRadius: 18,
              background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="mic" size={16} color={t.c.ink2} stroke={1.7}/>
            </div>

            {/* Big word */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 14, padding: '72px 24px 40px' }}>
              <div style={{
                fontFamily: '"Newsreader", "Source Serif 4", "Iowan Old Style", Georgia, serif',
                fontSize: 56, fontWeight: 400,
                color: t.c.ink, letterSpacing: '-0.015em', lineHeight: 1.05,
                direction: 'ltr',
              }}>
                ambiguous
              </div>
              <div style={{ fontFamily: t.fontEn, fontSize: 14, color: t.c.muted,
                letterSpacing: '0.02em', direction: 'ltr' }}>
                /æmˈbɪɡjuəs/ · adj.
              </div>
            </div>

            {/* Footer: two distinct memory-aid actions */}
            <div style={{
              padding: '10px 10px', borderTop: `0.5px solid ${t.c.line}`,
              display: 'flex', gap: 8,
            }}>
              <AidBtn t={t} icon="sparkle" label="אסוציאציה"/>
              <div style={{ width: 0.5, background: t.c.line, marginBlock: 4 }}/>
              <AidBtn t={t} icon="book" label="משפט לדוגמה"/>
            </div>
          </Card>
        </div>

        {/* Bottom: 3 actions, mostly the binary judgement */}
        <div style={{ display: 'flex', gap: 10 }}>
          <JudgeBtn t={t} kind="hard" label="לא יודע" icon="x"/>
          <JudgeBtn t={t} kind="skip" label="קשה"/>
          <JudgeBtn t={t} kind="easy" label="יודע" icon="check"/>
        </div>
      </div>
    </div>
  );
}

function JudgeBtn({ t, kind, label, icon }) {
  const map = {
    hard: { bg: t.dark ? 'rgba(255,140,140,0.10)' : 'oklch(0.96 0.04 20)',
      ink: t.c.statusRose },
    skip: { bg: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)',
      ink: t.c.ink2 },
    easy: { bg: t.dark ? 'oklch(0.30 0.12 150)' : t.accent,
      ink: '#fff' },
  };
  const s = map[kind];
  return (
    <div style={{
      flex: kind === 'easy' ? 2 : 1, height: 56, borderRadius: 20,
      background: s.bg, color: s.ink,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      fontWeight: 700, fontSize: 15,
    }}>
      {icon && <Icon name={icon} size={16} color={s.ink} stroke={2.2}/>}
      {label}
    </div>
  );
}

function AidBtn({ t, icon, label }) {
  return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 8, padding: '12px 10px', borderRadius: 14,
      fontSize: 13, fontWeight: 600, color: t.c.ink2,
    }}>
      <Icon name={icon} size={15} color={t.c.muted} stroke={1.8}/>
      <span>{label}</span>
    </div>
  );
}

Object.assign(window, { FlashcardScreen });
