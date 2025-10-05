import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import MainContent from './components/MainContent';
import { ThemeProvider } from './components/ThemeProvider';
import { useTheme, getThemeClasses } from './hooks/useTheme';

type AppState = 'loading' | 'fading' | 'loaded';

const AppContent: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('loading');
  const { theme } = useTheme();

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
    <div className={`w-full min-h-screen transition-colors duration-300 ${getThemeClasses(theme, 'primary')}`}>
      <SplashScreen isVisible={appState === 'loading' || appState === 'fading'} />
      <MainContent isVisible={appState === 'loaded'} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
