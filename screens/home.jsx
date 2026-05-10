// home.jsx — Home / Dashboard screen.
// Hero: greeting + big progress ring + segmented breakdown.
// Cards: Continue learning · Last session · Adaptive test CTA · Quick actions.

function HomeScreen({ t }) {
  // sample stats
  const known = 412, learning = 186, unsorted = 502;
  const total = known + learning + unsorted;
  const pct = Math.round((known / total) * 100);

  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe }}>
      <div style={{ padding: '6px 18px 110px' }}>

        {/* Greeting */}
        <div style={{ padding: '8px 4px 18px' }}>
          <div style={{ fontSize: 14, color: t.c.muted, marginBottom: 4 }}>
            יום ראשון · 10 במאי
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em',
            color: t.c.ink, lineHeight: 1.18 }}>
            שלום אמיר.<br/>
            <span style={{ color: t.c.ink2, fontWeight: 600 }}>בוא נמשיך מאיפה שעצרת.</span>
          </div>
        </div>

        {/* Hero progress card */}
        <Card t={t} pad={20} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <Ring t={t} value={pct} size={120} stroke={9}
              label={`${pct}%`} sub="התקדמות" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <BreakdownRow t={t} color={t.c.statusGreen} label="יודע" value={known} />
              <BreakdownRow t={t} color={t.accent} label="ללמידה" value={learning} />
              <BreakdownRow t={t} color={t.c.muted} label="טרם מוין" value={unsorted} faint />
            </div>
          </div>
          <div style={{ height: 1, background: t.c.line, margin: '18px -4px 14px', opacity: 0.7 }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="flame" size={17} color={t.c.statusAmber} stroke={1.8}/>
              <span style={{ fontSize: 14, color: t.c.ink2, fontWeight: 600 }}>
                רצף 12 ימים
              </span>
            </div>
            <div style={{ fontSize: 12, color: t.c.muted, fontFamily: t.fontEn,
              fontVariantNumeric: 'tabular-nums' }}>
              {total.toLocaleString()} סה״כ
            </div>
          </div>
        </Card>

        {/* Continue learning — feature row */}
        <div style={{ marginTop: 22 }}>
          <SectionHead t={t} title="המשך ללמוד" action="הכל"/>
          <Card t={t} pad={0} style={{ overflow: 'hidden' }}>
            <ContinueRow t={t} unit="Unit 4" level="Medium" progress={62}
              word="ambiguous" gloss="דו־משמעי" first/>
            <Divider t={t}/>
            <ContinueRow t={t} unit="חזרה — מאתמול" level="14 מילים" progress={0}
              word="resilience" gloss="עמידות, חוסן"/>
          </Card>
        </div>

        {/* Adaptive test CTA */}
        <div style={{ marginTop: 22 }}>
          <Card t={t} onAccent pad={20}
            style={{ position: 'relative', overflow: 'hidden' }}>
            {/* subtle decorative diamonds */}
            <div style={{ position: 'absolute', top: -28, left: -28, opacity: 0.18 }}>
              <AmirnetMark size={150} color="#fff" stroke={1} />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.16em',
                opacity: 0.85, marginBottom: 8 }}>
                סימולציה אדפטיבית · MST
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2,
                marginBottom: 4 }}>
                מבחן פסיכומטרי<br/>אנגלית
              </div>
              <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 18,
                fontVariantNumeric: 'tabular-nums', display: 'flex', gap: 12 }}>
                <span>23 שאלות</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>39 דקות</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>6 חלקים</span>
              </div>
              <PrimaryButton t={t} light large style={{
                background: '#fff', color: t.accentInk,
                boxShadow: 'none',
              }}>
                התחל מבחן חדש
                <Icon name="chevron-left" size={16} color={t.accentInk} stroke={2.2}/>
              </PrimaryButton>
            </div>
          </Card>
        </div>

        {/* Quick actions */}
        <div style={{ marginTop: 22 }}>
          <SectionHead t={t} title="פעולות מהירות"/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <QuickAction t={t} icon="cards" label="כרטיסיות" sub="10 מילים להיום"/>
            <QuickAction t={t} icon="clock" label="מילים מאתמול" sub="חזרה ממוקדת"/>
            <QuickAction t={t} icon="plus" label="מילה חדשה" sub="לרשימה האישית"/>
            <QuickAction t={t} icon="book" label="טקסט קריאה" sub="3 חדשים"/>
          </div>
        </div>

        {/* Source badge — quiet */}
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          color: t.c.muted, fontSize: 12 }}>
          <span>ספר מקור:</span>
          <span style={{ color: t.c.ink2, fontWeight: 600 }}>Kidum</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ color: t.accent, fontWeight: 600 }}>שנה</span>
        </div>
      </div>
      <TabBar t={t} active="home"/>
    </div>
  );
}

function BreakdownRow({ t, color, label, value, faint }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <StatusDot color={color}/>
      <div style={{ fontSize: 13.5, color: faint ? t.c.muted : t.c.ink2, fontWeight: 500 }}>{label}</div>
      <div style={{ flex: 1 }}/>
      <div style={{ fontFamily: t.fontEn, fontWeight: 700, fontSize: 15,
        fontVariantNumeric: 'tabular-nums', color: t.c.ink }}>{value}</div>
    </div>
  );
}

function Divider({ t }) {
  return <div style={{ height: 0.5, background: t.c.line, margin: '0 18px' }}/>;
}

function ContinueRow({ t, unit, level, progress, word, gloss, first }) {
  return (
    <div style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, color: t.accent,
            letterSpacing: '0.06em' }}>{unit}</span>
          <span style={{ fontSize: 11, color: t.c.muted }}>· {level}</span>
        </div>
        <div style={{ fontFamily: t.fontSerif, fontSize: 22, fontWeight: 500,
          color: t.c.ink, letterSpacing: '-0.005em', direction: 'ltr', textAlign: 'right' }}>
          {word}
        </div>
        <div style={{ fontSize: 13, color: t.c.ink2, marginTop: 2 }}>{gloss}</div>
        {progress > 0 && (
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <ProgressBar t={t} value={progress} height={4}/>
            <span style={{ fontSize: 11, fontFamily: t.fontEn, color: t.c.muted,
              fontVariantNumeric: 'tabular-nums', minWidth: 26 }}>{progress}%</span>
          </div>
        )}
      </div>
      <div style={{
        width: 42, height: 42, borderRadius: 21,
        background: t.accentSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="chevron-left" size={18} color={t.accent} stroke={2.2}/>
      </div>
    </div>
  );
}

function QuickAction({ t, icon, label, sub }) {
  return (
    <Card t={t} pad={14} style={{ display: 'flex', flexDirection: 'column', gap: 10, height: 92 }}>
      <Icon name={icon} size={20} color={t.accent} stroke={1.8}/>
      <div style={{ marginTop: 'auto' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: t.c.ink, lineHeight: 1.1 }}>{label}</div>
        <div style={{ fontSize: 11.5, color: t.c.muted, marginTop: 2 }}>{sub}</div>
      </div>
    </Card>
  );
}

Object.assign(window, { HomeScreen });
