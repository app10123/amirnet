// vocab.jsx — Vocabulary list screen.

function VocabScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe }}>
      <div style={{ padding: '4px 18px 110px' }}>
        {/* Title block + streak */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '8px 4px 14px' }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700, color: t.c.ink, letterSpacing: '-0.01em' }}>
              אוצר מילים
            </div>
            <div style={{ fontSize: 13, color: t.c.muted, marginTop: 2 }}>
              1,100 מילים · Kidum
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="flame" size={15} color={t.c.statusAmber}/>
            <span style={{ fontSize: 13, fontWeight: 700, color: t.c.ink2,
              fontFamily: t.fontEn, fontVariantNumeric: 'tabular-nums' }}>12</span>
          </div>
        </div>

        {/* Status counters — three small cards */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <CountChip t={t} color={t.c.statusGreen} label="יודע" value={412}/>
          <CountChip t={t} color={t.accent} label="ללמידה" value={186}/>
          <CountChip t={t} color={t.c.muted} label="טרם מוין" value={502}/>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflow: 'hidden' }}>
          <Pill t={t} selected>הכל</Pill>
          <Pill t={t}>Unit 4</Pill>
          <Pill t={t}>Medium</Pill>
          <Pill t={t}>ללמידה</Pill>
        </div>

        {/* Modes strip — 5 study modes */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', marginBottom: 8, padding: '0 2px' }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em',
              color: t.c.muted, fontFamily: t.fontEn }}>STUDY MODES</span>
            <span style={{ fontSize: 11.5, color: t.accent, fontWeight: 600 }}>הכל ←</span>
          </div>
          <div style={{ display: 'flex', gap: 8, overflow: 'auto', paddingBottom: 2 }}>
            <ModeTile t={t} icon="cards" label="כרטיסיות" sub="10 מילים" primary/>
            <ModeTile t={t} icon="car" label="נסיעה" sub="הקראה אוטומטית"/>
            <ModeTile t={t} icon="keyboard" label="הקלדה" sub="כתיב את המילה"/>
            <ModeTile t={t} icon="ear" label="האזנה" sub="זהה לפי שמע"/>
            <ModeTile t={t} icon="target" label="מבחן" sub="4 אפשרויות"/>
            <ModeTile t={t} icon="shuffle" label="ערבוב" sub="סדר אקראי"/>
          </div>
        </div>

        {/* Direction toggle */}
        <div style={{
          display: 'inline-flex', padding: 3, borderRadius: 9999,
          background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)',
          marginBottom: 14, fontSize: 13, fontWeight: 600,
          fontFamily: t.fontEn,
        }}>
          <div style={{ padding: '6px 14px', borderRadius: 9999, background: t.c.surface,
            color: t.c.ink, boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>HEB → ENG</div>
          <div style={{ padding: '6px 14px', color: t.c.muted }}>ENG → HEB</div>
        </div>

        {/* Word list */}
        <Card t={t} pad={0} style={{ overflow: 'hidden' }}>
          <WordRow t={t} word="ambiguous" gloss="דו־משמעי, סובל פירושים" unit="U4"
            level="M" status="learning" first/>
          <Divider t={t}/>
          <WordRow t={t} word="resilience" gloss="עמידות, חוסן נפשי" unit="U3"
            level="M" status="known"/>
          <Divider t={t}/>
          <WordRow t={t} word="ubiquitous" gloss="נפוץ בכל מקום, נמצא בכל" unit="U7"
            level="E" status="hard"/>
          <Divider t={t}/>
          <WordRow t={t} word="meticulous" gloss="קפדני, מדקדק בפרטים" unit="U5"
            level="M" status="learning"/>
          <Divider t={t}/>
          <WordRow t={t} word="profound" gloss="עמוק, מעמיק" unit="U2"
            level="B" status="known"/>
          <Divider t={t}/>
          <WordRow t={t} word="reluctant" gloss="מהסס, חושש לעשות" unit="U4"
            level="M" status="unsorted"/>
          <Divider t={t}/>
          <WordRow t={t} word="scrutinize" gloss="לבחון בדקדקנות" unit="U6"
            level="E" status="learning"/>
        </Card>
      </div>
      <TabBar t={t} active="vocab"/>
    </div>
  );
}

function CountChip({ t, color, label, value }) {
  return (
    <div style={{
      flex: 1, padding: '11px 12px',
      borderRadius: 16, background: t.c.surface,
      border: t.dark ? `0.5px solid ${t.c.line}` : 'none',
      boxShadow: t.dark ? 'none' : '0 1px 0 rgba(20,20,40,0.025)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <StatusDot color={color}/>
        <span style={{ fontSize: 11.5, color: t.c.ink2, fontWeight: 600 }}>{label}</span>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: t.c.ink, fontFamily: t.fontEn,
        letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}

function ModeTile({ t, icon, label, sub, primary }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 116, padding: '12px 12px', borderRadius: 16,
      background: primary ? t.accent : t.c.surface,
      color: primary ? '#fff' : t.c.ink,
      border: primary ? 'none' : `1px solid ${t.c.line}`,
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: 10,
        background: primary ? 'rgba(255,255,255,0.18)' : t.accentSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={icon} size={16} color={primary ? '#fff' : t.accent} stroke={1.9}/>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.1 }}>{label}</div>
        {sub && <div style={{ fontSize: 10.5, marginTop: 3,
          color: primary ? 'rgba(255,255,255,0.78)' : t.c.muted,
          lineHeight: 1.2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function ActionTile({ t, icon, label, sub, primary }) {
  return (
    <div style={{
      flex: 1, padding: '12px 14px', borderRadius: 16,
      background: primary ? t.accent : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
      color: primary ? '#fff' : t.c.ink,
      display: 'flex', alignItems: 'center', gap: 8, minHeight: 50,
    }}>
      <Icon name={icon} size={18} color={primary ? '#fff' : t.accent} stroke={1.8}/>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontSize: 13.5, fontWeight: 700 }}>{label}</span>
        {sub && <span style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>{sub}</span>}
      </div>
    </div>
  );
}

function WordRow({ t, word, gloss, unit, level, status, first }) {
  const colors = {
    known: t.c.statusGreen,
    learning: t.accent,
    unsorted: t.c.muted,
    hard: t.c.statusRose,
  };
  const labels = {
    known: 'יודע', learning: 'ללמידה', unsorted: 'טרם', hard: 'קשה',
  };
  return (
    <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: t.fontSerif, fontSize: 21, fontWeight: 500,
          color: t.c.ink, direction: 'ltr', textAlign: 'right',
          letterSpacing: '-0.005em', lineHeight: 1.1 }}>
          {word}
        </div>
        <div style={{ fontSize: 13, color: t.c.ink2, marginTop: 3,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {gloss}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        <Icon name="pin" size={14} color={status === 'learning' ? t.accent : t.c.muted} stroke={1.8}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <StatusDot color={colors[status]} size={6}/>
          <span style={{ fontSize: 11, color: t.c.ink2, fontWeight: 600 }}>{labels[status]}</span>
        </div>
        <div style={{ fontSize: 10.5, fontFamily: t.fontEn, color: t.c.muted,
          letterSpacing: '0.04em' }}>{unit} · {level}</div>
      </div>
    </div>
  );
}

Object.assign(window, { VocabScreen });
