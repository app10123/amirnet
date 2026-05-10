// texts-list.jsx — Reading passage library (טקסטים).

function TextsListScreen({ t }) {
  return (
    <div style={{ position: 'relative', height: '100%', fontFamily: t.fontHe,
      display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div style={{ padding: '8px 18px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <NavPill t={t}><Icon name="chevron-right" size={17} color={t.c.ink2} stroke={2}/></NavPill>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              color: t.c.muted, fontFamily: t.fontEn }}>READING LIBRARY</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: t.c.ink,
              letterSpacing: '-0.01em', marginTop: 2 }}>טקסטים</div>
          </div>
          <NavPill t={t}><Icon name="search" size={16} color={t.c.ink2} stroke={1.9}/></NavPill>
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ padding: '14px 18px 10px', display: 'flex', gap: 8, overflow: 'auto' }}>
        <Chip t={t} active>הכל</Chip>
        <Chip t={t}>קצרים</Chip>
        <Chip t={t}>בינוניים</Chip>
        <Chip t={t}>ארוכים</Chip>
        <Chip t={t}>טרם נקראו</Chip>
      </div>

      {/* List */}
      <div style={{ flex: 1, padding: '6px 18px 30px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 12 }}>

        <PassageRow t={t}
          tag="SCIENCE" words={312} mins={6} questions={5}
          title="Darwin's Finches Revisited"
          excerpt="In the late nineteenth century, naturalists in the Galápagos began documenting subtle variations in finch beaks…"
          status="new"/>

        <PassageRow t={t}
          tag="HISTORY" words={428} mins={9} questions={6}
          title="The Quiet Revolution of 1972"
          excerpt="What began as a series of unremarkable municipal reforms slowly reshaped the political vocabulary of an entire generation…"
          status="progress" progress={40}/>

        <PassageRow t={t}
          tag="ARTS" words={276} mins={5} questions={4}
          title="On the Persistence of Pigment"
          excerpt="Conservators at the Rijksmuseum face a paradox: the very paints that make seventeenth-century portraits luminous are the ones most prone to decay…"
          status="done" score={4}/>

        <PassageRow t={t}
          tag="ECONOMICS" words={519} mins={11} questions={7}
          title="Why Cities Don't Behave Like Markets"
          excerpt="Standard supply-and-demand models predict outcomes that empirical urban data rarely confirm. Density, it turns out, distorts…"
          status="locked"/>

        <PassageRow t={t}
          tag="PSYCHOLOGY" words={364} mins={7} questions={5}
          title="The Memory of Forgetting"
          excerpt="Far from being a defect of cognition, recent research suggests that forgetting may be the very mechanism by which we learn at all…"
          status="locked"/>
      </div>
    </div>
  );
}

function Chip({ t, active, children }) {
  return (
    <div style={{
      flexShrink: 0,
      padding: '7px 14px', borderRadius: 999,
      fontSize: 12.5, fontWeight: 600,
      background: active ? t.c.ink : (t.dark ? 'rgba(255,255,255,0.06)' : 'rgba(20,20,30,0.05)'),
      color: active ? t.c.surface : t.c.ink2,
    }}>{children}</div>
  );
}

function PassageRow({ t, tag, words, mins, questions, title, excerpt, status, progress, score }) {
  const locked = status === 'locked';
  return (
    <div style={{
      padding: '14px 16px', borderRadius: 18,
      background: t.c.surface, border: `1px solid ${t.c.line}`,
      opacity: locked ? 0.55 : 1,
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
          color: t.accent, fontFamily: t.fontEn,
          padding: '3px 8px', borderRadius: 4, background: t.accentSoft }}>{tag}</span>
        <span style={{ fontSize: 11, color: t.c.muted, fontFamily: t.fontEn,
          fontVariantNumeric: 'tabular-nums' }}>
          {words} words · {mins} min · {questions} Q
        </span>
        <div style={{ flex: 1 }}/>
        {status === 'done' && (
          <span style={{ fontSize: 11, fontWeight: 700, color: t.c.statusGreen,
            fontFamily: t.fontEn, fontVariantNumeric: 'tabular-nums' }}>
            {score}/{questions} ✓
          </span>
        )}
        {status === 'new' && (
          <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em',
            color: t.accent, fontFamily: t.fontEn }}>NEW</span>
        )}
        {locked && <Icon name="lock" size={14} color={t.c.muted} stroke={1.8}/>}
      </div>
      <div style={{ fontFamily: t.fontSerif, fontSize: 18, fontWeight: 500,
        color: t.c.ink, letterSpacing: '-0.005em', direction: 'ltr',
        textAlign: 'left', marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontFamily: t.fontSerif, fontSize: 13.5, lineHeight: 1.5,
        color: t.c.muted, direction: 'ltr', textAlign: 'left',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        overflow: 'hidden' }}>
        {excerpt}
      </div>
      {status === 'progress' && (
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1 }}><ProgressBar t={t} value={progress} height={3}/></div>
          <span style={{ fontSize: 11, fontFamily: t.fontEn, color: t.c.muted,
            fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{progress}%</span>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { TextsListScreen });
