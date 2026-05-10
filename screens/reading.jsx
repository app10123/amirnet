// reading.jsx — Reading comprehension passage + question.

function ReadingScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12,
        padding: '6px 18px 14px' }}>
        <NavPill t={t}><Icon name="x" size={17} color={t.c.ink2} stroke={2}/></NavPill>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              color: t.c.muted, fontFamily: t.fontEn }}>
              READING · 1 / 3
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 999,
              background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)' }}>
              <Icon name="clock" size={12} color={t.c.ink2} stroke={1.8}/>
              <span style={{ fontFamily: t.fontEn, fontSize: 12, fontWeight: 700,
                color: t.c.ink, fontVariantNumeric: 'tabular-nums' }}>11:08</span>
            </span>
          </div>
          <ProgressBar t={t} value={33} height={3}/>
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 0 130px', overflow: 'auto' }}>
        {/* Passage card */}
        <div style={{ padding: '0 18px 14px' }}>
          <Card t={t} pad={20} style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
                color: t.accent, fontFamily: t.fontEn }}>
                PASSAGE · 312 WORDS
              </span>
              <span style={{ fontSize: 11, color: t.c.muted, fontFamily: t.fontEn }}>
                A
                <span style={{ fontSize: 14, color: t.accent, marginInline: 4 }}>·</span>
                <span style={{ fontSize: 14 }}>A</span>
              </span>
            </div>
            <div style={{
              fontFamily: t.fontSerif, fontSize: 16.5, lineHeight: 1.65,
              color: t.c.ink, letterSpacing: '0.005em',
            }}>
              <p style={{ margin: '0 0 10px' }}>
                In the late nineteenth century, naturalists in the Galápagos
                began documenting subtle variations in finch beaks across
                neighboring islands. What appeared, at first, to be a
                <span style={{ background: t.accentSoft, padding: '0 3px',
                  borderRadius: 3, color: t.accentInk }}> trivial </span>
                taxonomic curiosity revealed itself, over decades, as evidence
                of one of biology's most consequential principles…
              </p>
              <p style={{ margin: 0, opacity: 0.55 }}>
                Recent fieldwork has refined this picture in surprising ways.
                Beak depth, once thought to drift slowly, can shift measurably
                across a single dry season—suggesting that selection operates
                on a timescale far shorter than Darwin himself imagined…
              </p>
            </div>
          </Card>
        </div>

        {/* Question */}
        <div style={{ padding: '6px 18px 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 11px', borderRadius: 999, background: t.accentSoft,
            marginBottom: 12 }}>
            <Icon name="dot" size={10} color={t.accent}/>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em',
              color: t.accentInk }}>שאלה 1</span>
          </div>
          <div style={{ fontSize: 16, color: t.c.ink, fontWeight: 600,
            lineHeight: 1.45, marginBottom: 14 }}>
            על פי הפסקה הראשונה, ההבדלים בין מקורי הפרושים נראו תחילה כ:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <SmallChoice t={t} letter="A" text="פרט אנקדוטי וזניח"/>
            <SmallChoice t={t} letter="B" text="ראיה לעקרון אבולוציוני" selected/>
            <SmallChoice t={t} letter="C" text="טעות מדידה של חוקרים"/>
            <SmallChoice t={t} letter="D" text="עניין טקסונומי בלבד"/>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 36px', display: 'flex', gap: 10,
      }}>
        <GhostButton t={t} style={{ flex: 1 }}>
          <Icon name="chevron-right" size={15} color={t.c.ink} stroke={2}/>
          הקודם
        </GhostButton>
        <PrimaryButton t={t} style={{ flex: 2 }}>
          הבא
          <Icon name="chevron-left" size={15} color="#fff" stroke={2.2}/>
        </PrimaryButton>
      </div>
    </div>
  );
}

function SmallChoice({ t, letter, text, selected }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
      borderRadius: 14,
      background: selected ? t.accentSoft : t.c.surface,
      border: selected ? `1.5px solid ${t.accent}` : `1px solid ${t.c.line}`,
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: 12,
        background: selected ? t.accent : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
        color: selected ? '#fff' : t.c.ink2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: t.fontEn, fontWeight: 700, fontSize: 11, flexShrink: 0,
      }}>{letter}</div>
      <div style={{ fontSize: 14.5, fontWeight: 500, color: t.c.ink }}>{text}</div>
    </div>
  );
}

Object.assign(window, { ReadingScreen });
