// settings.jsx — Settings screen with all original options reorganized.

function SettingsScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      <div style={{ padding: '8px 18px 6px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <NavPill t={t}><Icon name="chevron-right" size={17} color={t.c.ink2} stroke={2}/></NavPill>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            color: t.c.muted, fontFamily: t.fontEn }}>SETTINGS</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: t.c.ink,
            letterSpacing: '-0.01em', marginTop: 2 }}>הגדרות</div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '14px 18px 30px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 18 }}>

        <SettingGroup t={t} title="מקור הלימוד">
          <SourceRow t={t} name="Kidum" desc="ספרי קידום לפסיכומטרי" selected/>
          <Divider t={t}/>
          <SourceRow t={t} name="Campus IL" desc="ספרי קמפוס IL"/>
        </SettingGroup>

        <SettingGroup t={t} title="תצוגה והקראה">
          <SetRow t={t} icon="moon" label="מצב כהה / בהיר" value="אוטומטי" toggle/>
          <Divider t={t}/>
          <SetRow t={t} icon="mic" label="מהירות הקראה"
            value="רגיל" segmented={['איטי', 'רגיל', 'מהיר', 'מהיר מאוד']}/>
          <Divider t={t}/>
          <SetRow t={t} icon="globe" label="שפת ממשק" value="עברית" chevron/>
        </SettingGroup>

        <SettingGroup t={t} title="טיימרים">
          <SetRow t={t} icon="clock" label="השלמת משפטים" value="60 שנ׳" chevron/>
          <Divider t={t}/>
          <SetRow t={t} icon="clock" label="ניסוח מחדש" value="60 שנ׳" chevron/>
          <Divider t={t}/>
          <SetRow t={t} icon="clock" label="הבנת הנקרא" value="3 דק׳" chevron/>
        </SettingGroup>

        <SettingGroup t={t} title="גיבוי וייצוא">
          <SetRow t={t} icon="download" label="הורדת גיבוי נתונים" chevron/>
          <Divider t={t}/>
          <SetRow t={t} icon="upload" label="שחזור מקובץ גיבוי" chevron/>
          <Divider t={t}/>
          <SetRow t={t} icon="list" label="הדפסת רשימות" chevron/>
        </SettingGroup>

        <SettingGroup t={t} title="איפוס">
          <SetRow t={t} icon="x" label="מצב מחיקת מילים" toggle/>
          <Divider t={t}/>
          <SetRow t={t} icon="refresh" label="איפוס מילים שלמדתי" chevron danger/>
          <Divider t={t}/>
          <SetRow t={t} icon="x" label="איפוס מלא · מחיקת הכל" chevron danger/>
        </SettingGroup>

        <div style={{ textAlign: 'center', fontSize: 11, color: t.c.muted,
          fontFamily: t.fontEn, marginTop: 4 }}>
          Amirnet Pro · v3.2.1
        </div>
      </div>
    </div>
  );
}

function SettingGroup({ t, title, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
        color: t.c.muted, fontFamily: t.fontEn, padding: '0 6px 8px',
        textTransform: 'uppercase' }}>{title}</div>
      <Card t={t} pad={0} style={{ overflow: 'hidden' }}>{children}</Card>
    </div>
  );
}

function SourceRow({ t, name, desc, selected }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 22, height: 22, borderRadius: 11,
        border: `1.5px solid ${selected ? t.accent : t.c.line}`,
        background: selected ? t.accent : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {selected && <Icon name="check" size={12} color="#fff" stroke={2.6}/>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: t.fontEn, fontSize: 14.5, fontWeight: 700,
          color: t.c.ink }}>{name}</div>
        <div style={{ fontSize: 12, color: t.c.muted, marginTop: 1 }}>{desc}</div>
      </div>
    </div>
  );
}

function SetRow({ t, icon, label, value, toggle, chevron, segmented, danger }) {
  return (
    <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 30, height: 30, borderRadius: 9,
        background: danger ? 'oklch(0.95 0.04 20)' : t.accentSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name={icon} size={15}
          color={danger ? t.c.statusRose : t.accent} stroke={1.9}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600,
          color: danger ? t.c.statusRose : t.c.ink }}>{label}</div>
        {segmented && (
          <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
            {segmented.map((s) => (
              <span key={s} style={{
                fontSize: 10.5, fontWeight: 600,
                padding: '3px 8px', borderRadius: 999,
                background: s === value ? t.accentSoft : 'transparent',
                color: s === value ? t.accentInk : t.c.muted,
                border: s === value ? 'none' : `1px solid ${t.c.line}`,
              }}>{s}</span>
            ))}
          </div>
        )}
      </div>
      {toggle ? (
        <div style={{
          width: 42, height: 26, borderRadius: 13, padding: 2,
          background: t.accent, display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: '#fff' }}/>
        </div>
      ) : !segmented && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {value && <span style={{ fontSize: 13, color: t.c.muted, fontWeight: 500 }}>{value}</span>}
          {chevron && <Icon name="chevron-left" size={15} color={t.c.muted} stroke={1.8}/>}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { SettingsScreen, SettingGroup, SetRow, SourceRow });
