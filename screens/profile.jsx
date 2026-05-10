// profile.jsx — User profile / stats overview.

function ProfileScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      <div style={{ padding: '8px 18px 6px', display: 'flex',
        alignItems: 'center', gap: 10 }}>
        <NavPill t={t}><Icon name="gear" size={17} color={t.c.ink2} stroke={1.9}/></NavPill>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 700,
          color: t.c.ink2 }}>פרופיל</div>
        <NavPill t={t}><Icon name="upload" size={16} color={t.c.ink2} stroke={1.9}/></NavPill>
      </div>

      <div style={{ flex: 1, padding: '8px 18px 30px', overflow: 'auto' }}>

        {/* Identity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 10, padding: '14px 0 22px' }}>
          <div style={{
            width: 76, height: 76, borderRadius: 38,
            background: t.accentSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: t.fontEn, fontSize: 30, fontWeight: 700,
            color: t.accentInk, letterSpacing: '-0.04em',
          }}>NA</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: t.c.ink,
              letterSpacing: '-0.01em' }}>נועם א.</div>
            <div style={{ fontSize: 12.5, color: t.c.muted, marginTop: 2 }}>
              Kidum · יום 47 ברצף
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Badge t={t} icon="flame" label="רצף 47"/>
            <Badge t={t} icon="star" label="Level 3"/>
            <Badge t={t} icon="target" label="120"/>
          </div>
        </div>

        {/* Big stats — 4 squares */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 10, marginBottom: 18 }}>
          <BigStat t={t} value="412" label="מילים יודע" sub="+18 השבוע"
            color={t.c.statusGreen}/>
          <BigStat t={t} value="186" label="ללמידה" sub="34 בשינון ממוקד"
            color={t.accent}/>
          <BigStat t={t} value="68%" label="דיוק במבחנים" sub="32 מבחנים"
            color={t.c.ink}/>
          <BigStat t={t} value="14ש׳" label="זמן לימוד" sub="24 דק׳ ביום"
            color={t.c.statusAmber}/>
        </div>

        {/* Weekly chart */}
        <SettingGroup t={t} title="שבוע אחרון">
          <div style={{ padding: '18px 18px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between', height: 90, gap: 6 }}>
              {[
                { d: 'א', v: 32 }, { d: 'ב', v: 58 }, { d: 'ג', v: 12 },
                { d: 'ד', v: 76 }, { d: 'ה', v: 44 }, { d: 'ו', v: 88 },
                { d: 'ש', v: 20 },
              ].map((x, i) => (
                <div key={i} style={{ flex: 1, display: 'flex',
                  flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: '100%', height: 70, display: 'flex',
                    alignItems: 'flex-end' }}>
                    <div style={{
                      width: '100%', height: `${x.v}%`,
                      background: i === 5 ? t.accent : t.accentSoft,
                      borderRadius: 4,
                    }}/>
                  </div>
                  <span style={{ fontSize: 11, color: t.c.muted, fontWeight: 600 }}>{x.d}</span>
                </div>
              ))}
            </div>
          </div>
        </SettingGroup>

        {/* Achievements */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            color: t.c.muted, fontFamily: t.fontEn, padding: '0 6px 8px' }}>
            ACHIEVEMENTS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            gap: 8 }}>
            <AchTile t={t} icon="flame" label="30 יום ברצף" earned/>
            <AchTile t={t} icon="cards" label="500 מילים" earned/>
            <AchTile t={t} icon="target" label="ציון 130+"/>
            <AchTile t={t} icon="book" label="10 טקסטים"/>
            <AchTile t={t} icon="star" label="100% ביחידה" earned/>
            <AchTile t={t} icon="sparkle" label="מאסטר אוצר"/>
          </div>
        </div>

        {/* Account links */}
        <div style={{ marginTop: 18 }}>
          <Card t={t} pad={0}>
            <SetRow t={t} icon="user" label="פרטי חשבון" chevron/>
            <Divider t={t}/>
            <SetRow t={t} icon="gear" label="הגדרות" chevron/>
            <Divider t={t}/>
            <SetRow t={t} icon="upload" label="שתף עם חברים" chevron/>
            <Divider t={t}/>
            <SetRow t={t} icon="x" label="התנתק" danger/>
          </Card>
        </div>
      </div>

      <TabBar t={t} active="profile"/>
    </div>
  );
}

function Badge({ t, icon, label }) {
  return (
    <div style={{
      padding: '4px 9px 4px 7px', borderRadius: 999,
      background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)',
      display: 'flex', alignItems: 'center', gap: 4,
      fontSize: 11.5, fontWeight: 700, color: t.c.ink2,
    }}>
      <Icon name={icon} size={12} color={t.c.ink2} stroke={1.9}/>
      <span>{label}</span>
    </div>
  );
}

function BigStat({ t, value, label, sub, color }) {
  return (
    <div style={{
      padding: '14px 14px', borderRadius: 18,
      background: t.c.surface, border: `1px solid ${t.c.line}`,
    }}>
      <div style={{ width: 6, height: 6, borderRadius: 3, background: color, marginBottom: 8 }}/>
      <div style={{ fontFamily: t.fontEn, fontSize: 26, fontWeight: 700,
        color: t.c.ink, letterSpacing: '-0.02em', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: t.c.ink2, marginTop: 6 }}>{label}</div>
      <div style={{ fontSize: 11, color: t.c.muted, marginTop: 2 }}>{sub}</div>
    </div>
  );
}

function AchTile({ t, icon, label, earned }) {
  return (
    <div style={{
      padding: '12px 8px', borderRadius: 14,
      background: t.c.surface, border: `1px solid ${t.c.line}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      opacity: earned ? 1 : 0.45,
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: 17,
        background: earned ? t.accentSoft : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={icon} size={16} color={earned ? t.accent : t.c.muted} stroke={1.9}/>
      </div>
      <div style={{ fontSize: 10.5, fontWeight: 600, color: t.c.ink2,
        textAlign: 'center', lineHeight: 1.2 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { ProfileScreen });
