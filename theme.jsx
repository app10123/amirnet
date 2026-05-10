// theme.jsx — design tokens for the Amirnet redesign.
// Tokens are functions of (palette, dark, density) so a single React tree
// can reflect Tweaks changes live.

const PALETTES = {
  ink: {
    name: 'Ink',
    accent: 'oklch(0.46 0.14 248)',     // focused deep blue
    accentSoft: 'oklch(0.92 0.04 248)',
    accentInk: 'oklch(0.30 0.12 248)',
  },
  burgundy: {
    name: 'Burgundy',
    accent: 'oklch(0.45 0.13 25)',      // serious wine
    accentSoft: 'oklch(0.93 0.035 25)',
    accentInk: 'oklch(0.30 0.11 25)',
  },
  emerald: {
    name: 'Emerald',
    accent: 'oklch(0.48 0.12 162)',
    accentSoft: 'oklch(0.93 0.04 162)',
    accentInk: 'oklch(0.32 0.10 162)',
  },
};

function makeTokens(t) {
  const p = PALETTES[t.palette] || PALETTES.ink;
  const dark = !!t.dark;
  const dense = t.density === 'compact';

  const c = dark ? {
    bg:        'oklch(0.16 0.006 250)',
    surface:   'oklch(0.21 0.006 250)',
    surface2:  'oklch(0.25 0.006 250)',
    line:      'oklch(0.32 0.006 250)',
    ink:       'oklch(0.97 0.004 90)',
    ink2:      'oklch(0.78 0.005 90)',
    muted:     'oklch(0.58 0.006 250)',
    statusGreen: 'oklch(0.72 0.13 150)',
    statusAmber: 'oklch(0.78 0.14 75)',
    statusRose:  'oklch(0.70 0.14 20)',
  } : {
    bg:        'oklch(0.975 0.006 85)', // warm ivory
    surface:   '#ffffff',
    surface2:  'oklch(0.96 0.005 85)',
    line:      'oklch(0.90 0.006 85)',
    ink:       'oklch(0.20 0.012 85)',
    ink2:      'oklch(0.42 0.010 85)',
    muted:     'oklch(0.58 0.008 85)',
    statusGreen: 'oklch(0.55 0.13 150)',
    statusAmber: 'oklch(0.66 0.14 75)',
    statusRose:  'oklch(0.58 0.16 20)',
  };

  return {
    palette: p,
    dark,
    dense,
    c,
    accent: p.accent,
    accentSoft: dark ? `color-mix(in oklab, ${p.accent} 22%, transparent)` : p.accentSoft,
    accentInk: dark ? p.accent : p.accentInk,
    // type
    fontHe: '"Heebo", "Segoe UI", system-ui, sans-serif',
    fontEn: '-apple-system, "SF Pro Text", system-ui, sans-serif',
    fontSerif: '"Crimson Pro", "Source Serif 4", Georgia, serif',
    // radii
    rCard: 22,
    rPill: 9999,
    rChip: 12,
    // density-driven spacing
    pad: dense ? 14 : 18,
    rowH: dense ? 48 : 56,
    sectionGap: dense ? 18 : 26,
  };
}

// Glyph for the Amirnet "אמירנט" mark — concentric outlined diamond rings,
// drawn programmatically, matches the editorial vibe (no emoji).
function AmirnetMark({ size = 32, color = 'currentColor', stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2 L30 16 L16 30 L2 16 Z" stroke={color} strokeWidth={stroke} />
      <path d="M16 7 L25 16 L16 25 L7 16 Z" stroke={color} strokeWidth={stroke} opacity="0.6" />
      <circle cx="16" cy="16" r="2.4" fill={color} />
    </svg>
  );
}

// A handful of stroked geometric icons used across the app. Stroked, never
// emoji — the original app's emoji are part of what we're cleaning up.
function Icon({ name, size = 20, color = 'currentColor', stroke = 1.7 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'flame': return <svg {...common}><path d="M12 3c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 1-6 1-9z"/></svg>;
    case 'cards': return <svg {...common}><rect x="4" y="6" width="14" height="14" rx="2"/><path d="M8 3h12v14"/></svg>;
    case 'list':  return <svg {...common}><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/></svg>;
    case 'book':  return <svg {...common}><path d="M4 5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 1-2-2zM17 3v18"/></svg>;
    case 'shuffle': return <svg {...common}><path d="M16 3h5v5M4 20l17-17M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>;
    case 'mic':   return <svg {...common}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>;
    case 'plus':  return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'x':     return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'check': return <svg {...common}><path d="M4 12l5 5L20 6"/></svg>;
    case 'chevron-down': return <svg {...common}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chevron-left': return <svg {...common}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'chevron-right': return <svg {...common}><path d="M9 6l6 6-6 6"/></svg>;
    case 'gear':  return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4.9a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.5a7 7 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.6A7 7 0 0 0 5 12a7 7 0 0 0 .1 1.2l-2 1.6 2 3.4 2.4-.9a7 7 0 0 0 2 1.2L10 21h4l.5-2.5a7 7 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6c.07-.4.1-.8.1-1.2z"/></svg>;
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'target': return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color}/></svg>;
    case 'dot':   return <svg {...common}><circle cx="12" cy="12" r="3" fill={color}/></svg>;
    case 'star':  return <svg {...common}><path d="M12 3l2.6 5.6 6.1.6-4.6 4.2 1.3 6L12 16.8 6.6 19.4l1.3-6L3.3 9.2l6.1-.6z"/></svg>;
    case 'sparkle': return <svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>;
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>;
    case 'lock': return <svg {...common}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>;
    case 'refresh': return <svg {...common}><path d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.7L4 16M4 20v-4h4"/></svg>;
    case 'home': return <svg {...common}><path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg>;
    case 'user': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'quote': return <svg {...common}><path d="M7 7h4v6H7zM7 13c0 2 1 3 3 3M13 7h4v6h-4zM13 13c0 2 1 3 3 3"/></svg>;
    case 'car': return <svg {...common}><path d="M5 17h14M5 17v-4l2-5h10l2 5v4M5 17v2h2v-2M19 17v2h-2v-2"/><circle cx="8" cy="13" r="0.6" fill={color}/><circle cx="16" cy="13" r="0.6" fill={color}/></svg>;
    case 'keyboard': return <svg {...common}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10"/></svg>;
    case 'ear': return <svg {...common}><path d="M8 19c0-2-2-2-2-5a6 6 0 0 1 12 0c0 4-3 4-5 7-1 1.5-3 1-3-1 0-1.5 2-2 2-3"/></svg>;
    case 'moon': return <svg {...common}><path d="M20 14a8 8 0 1 1-10-10 7 7 0 0 0 10 10z"/></svg>;
    case 'globe': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'download': return <svg {...common}><path d="M12 4v12M7 11l5 5 5-5M5 20h14"/></svg>;
    case 'upload': return <svg {...common}><path d="M12 20V8M7 13l5-5 5 5M5 4h14"/></svg>;
    case 'pin': return <svg {...common}><path d="M12 17v4M9 4h6l-1 6 3 3H7l3-3z"/></svg>;
    default: return null;
  }
}

Object.assign(window, { PALETTES, makeTokens, AmirnetMark, Icon });
