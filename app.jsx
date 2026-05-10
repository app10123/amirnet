// app.jsx — DesignCanvas root + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ink",
  "dark": false,
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = makeTokens(tw);

  return (
    <>
      <DesignCanvas>
        <DCSection id="core" title="Core flow"
          subtitle="Home, vocabulary list and the focused flashcard study mode.">
          <DCArtboard id="home" label="01 · Home" width={402} height={874}>
            <HomeScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="vocab" label="02 · Vocabulary" width={402} height={874}>
            <VocabScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="flash" label="03 · Flashcard" width={402} height={874}>
            <FlashcardScreen t={t}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="practice" title="Practice modes"
          subtitle="Standalone study by question type — sentence completion, restatement, reading library.">
          <DCArtboard id="hub" label="04 · Practice hub" width={402} height={874}>
            <PracticeHubScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="restate" label="05 · Restatement" width={402} height={874}>
            <RestatementScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="texts" label="06 · Texts library" width={402} height={874}>
            <TextsListScreen t={t}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="test" title="Adaptive test"
          subtitle="MST simulation: pre-flight, in-question, results.">
          <DCArtboard id="overview" label="07 · Test overview" width={402} height={874}>
            <TestOverviewScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="question" label="08 · Sentence completion" width={402} height={874}>
            <TestQuestionScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="reading" label="09 · Reading comprehension" width={402} height={874}>
            <ReadingScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="results" label="10 · Results" width={402} height={874}>
            <ResultsScreen t={t}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="account" title="Profile & settings"
          subtitle="User profile, weekly activity, achievements, and the full settings tree.">
          <DCArtboard id="profile" label="11 · Profile" width={402} height={874}>
            <ProfileScreen t={t}/>
          </DCArtboard>
          <DCArtboard id="settings" label="12 · Settings" width={402} height={874}>
            <SettingsScreen t={t}/>
          </DCArtboard>
        </DCSection>

        <DCPostIt top={20} right={70} rotate={2.5} width={210}>
          The original app's iOS blue + emoji clutter give way to one
          confident accent + editorial type. Open Tweaks (top toolbar) to
          try alternates.
        </DCPostIt>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme"/>
        <TweakRadio label="Mode" value={tw.dark ? 'dark' : 'light'}
          options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]}
          onChange={(v) => setTweak('dark', v === 'dark')}/>
        <TweakSelect label="Accent" value={tw.palette}
          options={[
            { value: 'ink',      label: 'Ink (deep blue)' },
            { value: 'burgundy', label: 'Burgundy' },
            { value: 'emerald',  label: 'Emerald' },
          ]}
          onChange={(v) => setTweak('palette', v)}/>
        <TweakRadio label="Density" value={tw.density}
          options={[
            { value: 'comfortable', label: 'Comfortable' },
            { value: 'compact',     label: 'Compact' },
          ]}
          onChange={(v) => setTweak('density', v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
