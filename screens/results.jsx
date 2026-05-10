// results.jsx — Test results / score breakdown.

function ResultsScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe }}>
      <div style={{ padding: '4px 18px 130px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 14px' }}>
          <NavPill t={t}><Icon name="x" size={17} color={t.c.ink2} stroke={2}/></NavPill>
          <NavPill t={t}><Icon name="sparkle" size={17} color={t.c.ink2}/></NavPill>
        </div>

        {/* Headline */}
        <div style={{ padding: '8px 4px 22px' }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.16em',
            color: t.accent, marginBottom: 10 }}>
            תוצאה · אנגלית · MST
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: t.c.ink,
            letterSpacing: '-0.01em', lineHeight: 1.15 }}>
            מבחן הסתיים.<br/>
            <span style={{ color: t.c.ink2, fontWeight: 600 }}>הנה הניקוד שלך.</span>
          </div>
        </div>

        {/* Big score + range */}
        <Card t={t} pad={26} style={{ marginBottom: 14, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center',
            gap: 6 }}>
            <div style={{ fontFamily: t.fontEn, fontSize: 88, fontWeight: 700,
              letterSpacing: '-0.04em', color: t.c.ink, lineHeight: 1,
              fontVariantNumeric: 'tabular-nums' }}>120</div>
            <div style={{ fontSize: 13, color: t.c.muted, fontFamily: t.fontHe }}>
              נקודות
            </div>
          </div>
          <div style={{ fontSize: 12, color: t.c.muted, marginTop: 10, fontFamily: t.fontEn,
            letterSpacing: '0.04em' }}>
            ESTIMATED RANGE
          </div>
          {/* Range track */}
          <div style={{ marginTop: 8, padding: '0 6px' }}>
            <div style={{ position: 'relative', height: 28 }}>
              <div style={{ position: 'absolute', top: 12, left: 0, right: 0, height: 4,
                borderRadius: 2,
                background: t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.06)' }}/>
              <div style={{ position: 'absolute', top: 12, left: '46%', width: '14%', height: 4,
                borderRadius: 2, background: t.accent }}/>
              <div style={{ position: 'absolute', top: 4, left: 'calc(53% - 10px)',
                width: 20, height: 20, borderRadius: 10,
                background: t.accent, border: `3px solid ${t.c.surface}`,
                boxShadow: `0 0 0 1px ${t.accent}` }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontFamily: t.fontEn, fontSize: 11, color: t.c.muted,
              fontVariantNumeric: 'tabular-nums', marginTop: 2 }}>
              <span>50</span><span>100</span><span>115</span><span>125</span><span>150</span>
            </div>
          </div>
        </Card>

        {/* Per-section breakdown */}
        <SectionHead t={t} title="פירוט לפי חלק"/>
        <Card t={t} pad={0} style={{ overflow: 'hidden' }}>
          <ResultRow t={t} title="השלמת משפטים" sub="Sentence Completion"
            correct={10} total={12} pct={83} first/>
          <Divider t={t}/>
          <ResultRow t={t} title="הבנת הנקרא" sub="Reading Comprehension"
            correct={3} total={5} pct={60}/>
          <Divider t={t}/>
          <ResultRow t={t} title="ניסוח מחדש" sub="Restatement"
            correct={5} total={6} pct={83}/>
        </Card>

        {/* Strongest / weakest */}
        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          <InsightCard t={t} kind="best" label="חזק ביותר" value="ניסוח מחדש" sub="83%"/>
          <InsightCard t={t} kind="focus" label="לחזרה" value="הבנת הנקרא" sub="60%"/>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 36px', display: 'flex', gap: 10,
        background: t.dark ? 'linear-gradient(180deg, transparent, oklch(0.16 0.006 250) 30%)'
          : 'linear-gradient(180deg, transparent, oklch(0.975 0.006 85) 30%)',
      }}>
        <GhostButton t={t} style={{ flex: 1 }}>סקור שגיאות</GhostButton>
        <PrimaryButton t={t} style={{ flex: 1.2 }}>
          מבחן חדש
          <Icon name="chevron-left" size={15} color="#fff" stroke={2.2}/>
        </PrimaryButton>
      </div>
    </div>
  );
}

function ResultRow({ t, title, sub, correct, total, pct }) {
  const color = pct >= 80 ? t.c.statusGreen : pct >= 60 ? t.c.statusAmber : t.c.statusRose;
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: t.c.ink }}>{title}</div>
        <div style={{ fontSize: 11.5, color: t.c.muted, fontFamily: t.fontEn,
          marginTop: 2, letterSpacing: '0.02em' }}>{sub}</div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, maxWidth: 120 }}>
            <ProgressBar t={t} value={pct} height={4}/>
          </div>
          <span style={{ fontSize: 11.5, fontFamily: t.fontEn, color: t.c.muted,
            fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>
            {correct}/{total}
          </span>
        </div>
      </div>
      <div style={{
        fontFamily: t.fontEn, fontSize: 22, fontWeight: 700, color, lineHeight: 1,
        letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums',
      }}>{pct}<span style={{ fontSize: 13, opacity: 0.7 }}>%</span></div>
    </div>
  );
}

function InsightCard({ t, kind, label, value, sub }) {
  const color = kind === 'best' ? t.c.statusGreen : t.c.statusAmber;
  return (
    <Card t={t} pad={14} style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <StatusDot color={color}/>
        <span style={{ fontSize: 11, fontWeight: 700, color: t.c.ink2,
          letterSpacing: '0.06em' }}>{label}</span>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: t.c.ink, lineHeight: 1.2 }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: t.c.muted, marginTop: 4, fontFamily: t.fontEn,
        fontVariantNumeric: 'tabular-nums' }}>{sub}</div>
    </Card>
  );
}

Object.assign(window, { ResultsScreen });
