// ui.jsx — shared primitives across all Amirnet screens.
// All components accept `t` (the result of makeTokens) so theme & density
// flow through props, not context magic.

// ─────────────────────────────────────────────────────────────
// Phone shell — wraps IOSDevice and renders Amirnet's own status bar +
// chrome on top of the iOS status bar. Renders a custom RTL nav bar
// (logo + actions) instead of the default iOS large title.
// ─────────────────────────────────────────────────────────────
function Phone({ t, children, padBottom = 28, navBar = true, dark, bg, scroll = true }) {
  const isDark = dark ?? t.dark;
  const surface = bg || t.c.bg;
  return (
    <IOSDevice dark={isDark} width={402} height={874}>
      <div dir="rtl" style={{
        position: 'absolute', inset: 0, background: surface,
        display: 'flex', flexDirection: 'column',
        fontFamily: t.fontHe, color: t.c.ink,
      }}>
        {/* spacer below status bar */}
        <div style={{ height: 54, flexShrink: 0 }} />
        {navBar && <AmirnetNav t={t} />}
        <div style={{
          flex: 1,
          overflow: scroll ? 'auto' : 'hidden',
          paddingBottom: padBottom + 34,
        }}>
          {children}
        </div>
      </div>
    </IOSDevice>
  );
}

// Top nav: small logo block on the right (RTL primary side), pill actions
// on the left. Sticky-feeling but not actually sticky here.
function AmirnetNav({ t, title, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 18px 12px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <AmirnetMark size={26} color={t.accent} stroke={1.7} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '0.06em', color: t.c.ink }}>אמירנט</span>
          <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.18em', color: t.accent, marginTop: 3 }}>PRO</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {action || (
          <>
            <NavPill t={t}><Icon name="sparkle" size={17} color={t.c.ink2}/></NavPill>
            <NavPill t={t}><Icon name="gear" size={18} color={t.c.ink2}/></NavPill>
          </>
        )}
      </div>
    </div>
  );
}

function NavPill({ t, children }) {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: 19,
      background: t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.045)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// Card — primary surface
// ─────────────────────────────────────────────────────────────
function Card({ t, children, style, pad, onAccent }) {
  return (
    <div style={{
      background: onAccent ? t.accent : t.c.surface,
      borderRadius: t.rCard,
      padding: pad ?? t.pad,
      border: t.dark ? `0.5px solid ${t.c.line}` : 'none',
      boxShadow: t.dark ? 'none' : '0 1px 0 rgba(20,20,40,0.025), 0 6px 22px -12px rgba(20,20,40,0.10)',
      color: onAccent ? '#fff' : t.c.ink,
      ...style,
    }}>{children}</div>
  );
}

// Section header with optional action link
function SectionHead({ t, title, action, onClick }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '0 4px 10px',
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
        color: t.c.ink2, textTransform: 'uppercase' }}>{title}</div>
      {action && <div onClick={onClick} style={{
        fontSize: 13, fontWeight: 600, color: t.accent,
      }}>{action}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Pills, chips, status dots
// ─────────────────────────────────────────────────────────────
function Pill({ t, children, onClick, selected, color, style }) {
  const c = color || t.accent;
  return (
    <div onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '7px 13px', borderRadius: 9999,
      background: selected ? c : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
      color: selected ? '#fff' : t.c.ink,
      fontSize: 13, fontWeight: 600,
      ...style,
    }}>{children}</div>
  );
}

function StatusDot({ color, size = 8 }) {
  return <span style={{
    display: 'inline-block', width: size, height: size, borderRadius: '50%',
    background: color, flexShrink: 0,
  }}/>;
}

// ─────────────────────────────────────────────────────────────
// Progress
// ─────────────────────────────────────────────────────────────
function ProgressBar({ t, value, segments, height = 6 }) {
  if (segments) {
    // segmented bar: array of { value, color }
    const total = segments.reduce((s, x) => s + x.value, 0) || 1;
    return (
      <div style={{ width: '100%', height, borderRadius: height/2,
        background: t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.06)',
        display: 'flex', overflow: 'hidden', gap: 2 }}>
        {segments.map((s, i) => s.value > 0 && (
          <div key={i} style={{
            width: `${(s.value/total)*100}%`,
            background: s.color,
          }}/>
        ))}
      </div>
    );
  }
  return (
    <div style={{ width: '100%', height, borderRadius: height/2,
      background: t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.06)',
      overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: t.accent,
        borderRadius: height/2 }}/>
    </div>
  );
}

// Big circular progress ring used on Home and Results.
function Ring({ t, value, size = 140, stroke = 10, label, sub, color }) {
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const dash = (value / 100) * C;
  const ringColor = color || t.accent;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r}
          stroke={t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.06)'}
          strokeWidth={stroke} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r}
          stroke={ringColor} strokeWidth={stroke} fill="none"
          strokeDasharray={`${dash} ${C}`} strokeLinecap="round"/>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        {label && <div style={{ fontSize: size * 0.28, fontWeight: 700, color: t.c.ink,
          fontFamily: t.fontEn, letterSpacing: '-0.04em', lineHeight: 1 }}>{label}</div>}
        {sub && <div style={{ fontSize: 11, color: t.c.muted, marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab bar — bottom navigation
// ─────────────────────────────────────────────────────────────
function TabBar({ t, active = 'home' }) {
  const items = [
    { id: 'home', label: 'בית', icon: 'home' },
    { id: 'practice', label: 'תרגול', icon: 'cards' },
    { id: 'test', label: 'מבחן', icon: 'target' },
    { id: 'profile', label: 'פרופיל', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 16, right: 16, bottom: 24,
      height: 68, borderRadius: 28,
      background: t.dark ? 'rgba(28,28,32,0.85)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: t.dark ? '0.5px solid rgba(255,255,255,0.12)' : '0.5px solid rgba(0,0,0,0.06)',
      boxShadow: '0 8px 30px rgba(20,20,40,0.10)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      zIndex: 30, fontFamily: t.fontHe,
    }}>
      {items.map(it => {
        const on = it.id === active;
        return (
          <div key={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? t.accent : t.c.muted,
          }}>
            <Icon name={it.icon} size={20} color={on ? t.accent : t.c.muted} stroke={on ? 2 : 1.7}/>
            <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 500 }}>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────────────────────
function PrimaryButton({ t, children, onClick, style, large, light }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      height: large ? 56 : 50, borderRadius: 9999,
      background: light ? '#fff' : t.accent,
      color: light ? t.accent : '#fff',
      fontWeight: 700, fontSize: large ? 17 : 16,
      letterSpacing: '0.01em',
      boxShadow: light ? 'none' : `0 6px 20px -6px ${t.accent}`,
      ...style,
    }}>{children}</div>
  );
}

function GhostButton({ t, children, onClick, style }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      height: 50, borderRadius: 9999,
      background: t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,30,0.05)',
      color: t.c.ink, fontWeight: 600, fontSize: 16,
      ...style,
    }}>{children}</div>
  );
}

Object.assign(window, {
  Phone, AmirnetNav, NavPill, Card, SectionHead,
  Pill, StatusDot, ProgressBar, Ring, TabBar,
  PrimaryButton, GhostButton,
});
