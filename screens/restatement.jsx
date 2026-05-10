// restatement.jsx — Restatement (ניסוח מחדש) practice screen.

function RestatementScreen({ t }) {
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
              RESTATEMENT · 3 / 8
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 999,
              background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)' }}>
              <Icon name="clock" size={12} color={t.c.ink2} stroke={1.8}/>
              <span style={{ fontFamily: t.fontEn, fontSize: 12, fontWeight: 700,
                color: t.c.ink, fontVariantNumeric: 'tabular-nums' }}>1:24</span>
            </span>
          </div>
          <ProgressBar t={t} value={37} height={3}/>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px 18px 130px', overflow: 'auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 11px', borderRadius: 999, background: t.accentSoft,
          marginBottom: 16 }}>
          <Icon name="dot" size={10} color={t.accent}/>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em',
            color: t.accentInk }}>ניסוח מחדש</span>
        </div>

        <div style={{ fontSize: 13, color: t.c.muted, fontWeight: 500,
          marginBottom: 10 }}>
          בחר את הניסוח שמשמר הכי טוב את משמעות המשפט המקורי
        </div>

        {/* Original sentence card */}
        <div style={{
          padding: '16px 18px', borderRadius: 18,
          background: t.dark ? 'rgba(255,255,255,0.04)' : 'rgba(20,20,30,0.035)',
          border: `1px solid ${t.c.line}`,
          marginBottom: 18,
        }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            color: t.c.muted, fontFamily: t.fontEn, marginBottom: 8 }}>
            ORIGINAL
          </div>
          <div style={{
            fontFamily: t.fontSerif, fontSize: 19, lineHeight: 1.55,
            color: t.c.ink, direction: 'ltr', textAlign: 'left',
          }}>
            Although the policy was widely criticized at first, it
            eventually became the cornerstone of the administration's
            economic strategy.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <RChoice t={t} letter="A" text="The policy, despite initial widespread criticism, ultimately came to anchor the administration's economic agenda." selected/>
          <RChoice t={t} letter="B" text="The administration based its economic strategy on a policy that critics had originally praised."/>
          <RChoice t={t} letter="C" text="Critics of the policy gradually persuaded the administration to abandon its economic strategy."/>
          <RChoice t={t} letter="D" text="The administration only adopted the policy after years of unanswered criticism."/>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 36px', display: 'flex', gap: 10,
      }}>
        <GhostButton t={t} style={{ flex: 1 }}>דלג</GhostButton>
        <PrimaryButton t={t} style={{ flex: 2 }}>
          הבא
          <Icon name="chevron-left" size={15} color="#fff" stroke={2.2}/>
        </PrimaryButton>
      </div>
    </div>
  );
}

function RChoice({ t, letter, text, selected }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 14px',
      borderRadius: 16,
      background: selected ? t.accentSoft : t.c.surface,
      border: selected ? `1.5px solid ${t.accent}` : `1px solid ${t.c.line}`,
      direction: 'ltr',
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: 12,
        background: selected ? t.accent : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
        color: selected ? '#fff' : t.c.ink2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: t.fontEn, fontWeight: 700, fontSize: 11, flexShrink: 0,
        marginTop: 1,
      }}>{letter}</div>
      <div style={{
        flex: 1, fontFamily: t.fontSerif, fontSize: 14.5, lineHeight: 1.5,
        color: t.c.ink, letterSpacing: '0',
      }}>{text}</div>
    </div>
  );
}

Object.assign(window, { RestatementScreen });
