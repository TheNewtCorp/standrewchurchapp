
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import MainContent from './components/MainContent';

type AppState = 'loading' | 'fading' | 'loaded';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('loading');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setAppState('fading');
    }, 2000); // Hold splash screen for 2 seconds

    const fadeTimer = setTimeout(() => {
      setAppState('loaded');
    }, 2500); // Begin fade out at 2s, finish at 2.5s to allow for transition

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f0f4f8]">
      <SplashScreen isVisible={appState === 'loading' || appState === 'fading'} />
      <MainContent isVisible={appState === 'loaded'} />
    </div>
  );
};

export default App;
