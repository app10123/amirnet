// test-overview.jsx — Adaptive psychometric test overview / pre-flight.

function TestOverviewScreen({ t }) {
  const sections = [
    { n: 1, title: 'השלמת משפטים', sub: 'Sentence Completion', q: 4, time: 4, level: 'mid' },
    { n: 2, title: 'השלמת משפטים', sub: 'Sentence Completion', q: 4, time: 4, level: 'mid' },
    { n: 3, title: 'הבנת הנקרא', sub: 'Reading Comprehension', q: 5, time: 15, level: 'mid' },
    { n: 4, title: 'ניסוח מחדש', sub: 'Restatement', q: 3, time: 6, level: 'mid' },
    { n: 5, title: 'ניסוח מחדש', sub: 'Restatement', q: 3, time: 6, level: 'mid' },
    { n: 6, title: 'השלמת משפטים', sub: 'Sentence Completion', q: 4, time: 4, level: 'mid' },
  ];

  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe }}>
      <div style={{ padding: '4px 18px 130px' }}>

        {/* Header — back, kebab */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 18px' }}>
          <NavPill t={t}><Icon name="chevron-right" size={18} color={t.c.ink2}/></NavPill>
          <NavPill t={t}><Icon name="gear" size={17} color={t.c.ink2}/></NavPill>
        </div>

        {/* Hero block */}
        <div style={{ padding: '0 4px 24px' }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.16em',
            color: t.accent, marginBottom: 8 }}>
            סימולציה · MST
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: t.c.ink, lineHeight: 1.1,
            letterSpacing: '-0.01em' }}>
            מבחן פסיכומטרי<br/>
            <span style={{ color: t.c.ink2, fontWeight: 600 }}>אנגלית</span>
          </div>
          <div style={{ fontSize: 14, color: t.c.muted, marginTop: 10, lineHeight: 1.5 }}>
            סימולציה אדפטיבית של חלק האנגלית. רמת השאלות מתעדכנת לאורך
            המבחן בהתאם לביצועים שלך.
          </div>
        </div>

        {/* Stats strip */}
        <Card t={t} pad={0} style={{ marginBottom: 22, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <StatCell t={t} value="23" label="שאלות"/>
            <StatCell t={t} value="39" label="דקות" mid/>
            <StatCell t={t} value="6" label="חלקים"/>
          </div>
        </Card>

        {/* Section breakdown */}
        <SectionHead t={t} title="מבנה המבחן"/>
        <Card t={t} pad={0} style={{ overflow: 'hidden' }}>
          {sections.map((s, i) => (
            <React.Fragment key={i}>
              <SectionRow t={t} {...s}/>
              {i < sections.length - 1 && <Divider t={t}/>}
            </React.Fragment>
          ))}
        </Card>

        {/* AI note */}
        <div style={{ marginTop: 18, padding: '14px 16px', borderRadius: 16,
          background: t.accentSoft, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ marginTop: 1 }}>
            <Icon name="sparkle" size={16} color={t.accentInk} stroke={1.8}/>
          </div>
          <div style={{ fontSize: 12.5, color: t.accentInk, lineHeight: 1.45 }}>
            <span style={{ fontWeight: 700 }}>שאלות חדשות בכל מבחן.</span> Claude AI מייצר שאלות
            מותאמות לרמתך הנוכחית — אף מבחן לא חוזר על עצמו.
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 36px',
        background: t.dark ? 'linear-gradient(180deg, transparent, oklch(0.16 0.006 250) 30%)'
          : 'linear-gradient(180deg, transparent, oklch(0.975 0.006 85) 30%)',
      }}>
        <PrimaryButton t={t} large>
          התחל מבחן
          <Icon name="chevron-left" size={16} color="#fff" stroke={2.2}/>
        </PrimaryButton>
      </div>
    </div>
  );
}

function StatCell({ t, value, label, mid }) {
  return (
    <div style={{
      padding: '18px 8px', textAlign: 'center',
      borderInline: mid ? `0.5px solid ${t.c.line}` : 'none',
    }}>
      <div style={{ fontFamily: t.fontEn, fontSize: 28, fontWeight: 700,
        letterSpacing: '-0.03em', color: t.c.ink, lineHeight: 1,
        fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontSize: 12, color: t.c.muted, marginTop: 4 }}>{label}</div>
    </div>
  );
}

function SectionRow({ t, n, title, sub, q, time }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 32, height: 32, borderRadius: 10, flexShrink: 0,
        background: t.accentSoft, color: t.accentInk,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: t.fontEn, fontWeight: 700, fontSize: 14,
      }}>{n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: t.c.ink }}>{title}</div>
        <div style={{ fontSize: 11.5, color: t.c.muted, fontFamily: t.fontEn,
          letterSpacing: '0.02em', marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 12, color: t.c.ink2, fontFamily: t.fontEn,
          fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{q} שאלות</span>
        <span style={{ fontSize: 11, color: t.c.muted, fontFamily: t.fontEn,
          fontVariantNumeric: 'tabular-nums' }}>{time} דק׳</span>
      </div>
    </div>
  );
}

Object.assign(window, { TestOverviewScreen });
