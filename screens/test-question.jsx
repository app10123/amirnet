// test-question.jsx — Active sentence-completion question.

function TestQuestionScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      {/* Top: timer + close */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12,
        padding: '6px 18px 14px' }}>
        <NavPill t={t}><Icon name="x" size={17} color={t.c.ink2} stroke={2}/></NavPill>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              color: t.c.muted, fontFamily: t.fontEn }}>
              SECTION 1 · QUESTION 1 / 4
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 999,
              background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)' }}>
              <Icon name="clock" size={12} color={t.c.ink2} stroke={1.8}/>
              <span style={{ fontFamily: t.fontEn, fontSize: 12, fontWeight: 700,
                color: t.c.ink, fontVariantNumeric: 'tabular-nums' }}>3:42</span>
            </span>
          </div>
          <ProgressBar t={t} value={25} height={3}/>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px 18px 130px', overflow: 'auto' }}>
        {/* Type pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 11px', borderRadius: 999, background: t.accentSoft,
          marginBottom: 18 }}>
          <Icon name="dot" size={10} color={t.accent}/>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em',
            color: t.accentInk }}>השלמת משפטים</span>
        </div>

        {/* The sentence */}
        <div style={{
          fontFamily: t.fontSerif, fontSize: 23, fontWeight: 400,
          color: t.c.ink, lineHeight: 1.5, direction: 'ltr', textAlign: 'left',
          letterSpacing: '0',
          marginBottom: 28,
        }}>
          Despite the apparent simplicity of the proof, its
          {' '}<span style={{
            display: 'inline-block', minWidth: 86, textAlign: 'center',
            padding: '1px 14px', margin: '0 2px',
            borderRadius: 8,
            background: t.accentSoft, color: t.accentInk, fontWeight: 600,
          }}>______</span>{' '}
          arguments forced the committee to reconsider every premise.
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Choice t={t} letter="A" text="trivial" gloss="טריוויאלי, לא מהותי"/>
          <Choice t={t} letter="B" text="nuanced" gloss="עדין, רב־גוני" selected/>
          <Choice t={t} letter="C" text="vacant" gloss="ריק, חסר תוכן"/>
          <Choice t={t} letter="D" text="redundant" gloss="מיותר, חוזר על עצמו"/>
        </div>

        {/* Bottom tools */}
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between',
          padding: '0 4px' }}>
          <ToolBtn t={t} icon="star" label="סימן"/>
          <ToolBtn t={t} icon="chevron-down" label="דלג"/>
          <ToolBtn t={t} icon="sparkle" label="רמז"/>
        </div>
      </div>

      {/* Sticky next */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 36px',
      }}>
        <PrimaryButton t={t} large>
          הבא
          <Icon name="chevron-left" size={16} color="#fff" stroke={2.2}/>
        </PrimaryButton>
      </div>
    </div>
  );
}

function Choice({ t, letter, text, gloss, selected }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
      borderRadius: 18,
      background: selected ? t.accentSoft : t.c.surface,
      border: selected ? `1.5px solid ${t.accent}` : `1px solid ${t.c.line}`,
      direction: 'ltr',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 14,
        background: selected ? t.accent : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
        color: selected ? '#fff' : t.c.ink2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: t.fontEn, fontWeight: 700, fontSize: 12.5, flexShrink: 0,
      }}>{letter}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: t.fontSerif, fontSize: 19, fontWeight: 500,
          color: t.c.ink, letterSpacing: '-0.005em' }}>
          {text}
        </div>
        <div style={{ fontSize: 12, color: t.c.muted, fontFamily: t.fontHe,
          direction: 'rtl', textAlign: 'left', marginTop: 2 }}>
          {gloss}
        </div>
      </div>
    </div>
  );
}

function ToolBtn({ t, icon, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      color: t.c.ink2 }}>
      <Icon name={icon} size={18} color={t.c.ink2} stroke={1.7}/>
      <span style={{ fontSize: 11, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

Object.assign(window, { TestQuestionScreen });
