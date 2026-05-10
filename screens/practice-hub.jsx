// practice-hub.jsx — Practice mode hub with the four study tabs.

function PracticeHubScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div style={{ padding: '8px 18px 4px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
          color: t.c.muted, fontFamily: t.fontEn }}>PRACTICE</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: t.c.ink,
          letterSpacing: '-0.015em', marginTop: 2 }}>בחר מצב תרגול</div>
        <div style={{ fontSize: 13, color: t.c.muted, marginTop: 4 }}>
          ארבעה סוגי תרגול · התקדמות אישית לפי קטגוריה
        </div>
      </div>

      {/* The four cards */}
      <div style={{ flex: 1, padding: '18px 18px 24px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 12 }}>

        <PracticeCard t={t}
          en="VOCABULARY" he="אוצר מילים"
          desc="כרטיסיות שינון, מבחני זיכרון, רשימות מותאמות"
          stat="247 / 1,840" statLabel="מילים יודע"
          progress={13} icon="cards"/>

        <PracticeCard t={t}
          en="SENTENCE COMPLETION" he="השלמת משפטים"
          desc="מילה חסרה במשפט · 4 הסחות · טיימר מותאם"
          stat="68%" statLabel="דיוק ממוצע"
          progress={68} icon="quote"/>

        <PracticeCard t={t}
          en="RESTATEMENT" he="ניסוח מחדש"
          desc="זיהוי הניסוח השומר על משמעות המשפט המקורי"
          stat="74%" statLabel="דיוק ממוצע"
          progress={74} icon="refresh"/>

        <PracticeCard t={t}
          en="READING" he="הבנת הנקרא"
          desc="קטעי קריאה אקדמיים · שאלות מרובות־ברירה"
          stat="9 / 24" statLabel="טקסטים"
          progress={37} icon="book"/>
      </div>

      {/* Bottom tabs */}
      <BottomTabs t={t} active="practice"/>
    </div>
  );
}

function PracticeCard({ t, en, he, desc, stat, statLabel, progress, icon }) {
  return (
    <div style={{
      padding: '18px 18px',
      borderRadius: 22,
      background: t.c.surface,
      color: t.c.ink,
      border: `1px solid ${t.c.line}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 14,
          background: t.accentSoft,
          color: t.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon name={icon} size={20} color={t.accent} stroke={1.8}/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            color: t.c.muted, fontFamily: t.fontEn }}>{en}</div>
          <div style={{ fontSize: 19, fontWeight: 700, marginTop: 3,
            letterSpacing: '-0.005em' }}>{he}</div>
          <div style={{ fontSize: 12.5, marginTop: 6,
            color: t.c.muted, lineHeight: 1.4 }}>{desc}</div>
        </div>
        <Icon name="chevron-left" size={18} color={t.c.muted} stroke={1.8}/>
      </div>

      <div style={{
        marginTop: 14, paddingTop: 14,
        borderTop: `0.5px solid ${t.c.line}`,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ flexShrink: 0, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: t.c.muted }}>{statLabel}</div>
          <div style={{ fontFamily: t.fontEn, fontSize: 16, fontWeight: 700,
            letterSpacing: '-0.01em', marginTop: 1, color: t.c.ink,
            fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{stat}</div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            height: 4, borderRadius: 2,
            background: t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.06)',
            overflow: 'hidden',
          }}>
            <div style={{ width: `${progress}%`, height: '100%', background: t.accent }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomTabs({ t, active }) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'בית' },
    { id: 'practice', icon: 'cards', label: 'תרגול' },
    { id: 'test', icon: 'target', label: 'מבחן' },
    { id: 'profile', icon: 'user', label: 'פרופיל' },
  ];
  return (
    <div style={{
      display: 'flex', padding: '8px 12px 26px',
      borderTop: `0.5px solid ${t.c.line}`,
      background: t.c.surface,
    }}>
      {tabs.map((tab) => {
        const on = tab.id === active;
        return (
          <div key={tab.id} style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 3, padding: '6px 0',
            color: on ? t.accent : t.c.muted,
          }}>
            <Icon name={tab.icon} size={20}
              color={on ? t.accent : t.c.muted} stroke={on ? 2.1 : 1.7}/>
            <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 600 }}>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { PracticeHubScreen });
