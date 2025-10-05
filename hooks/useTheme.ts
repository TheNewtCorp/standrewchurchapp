import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme configuration object for St. Andrew Church app
export const themeConfig = {
  light: {
    // Light theme colors using custom palette
    primary: 'bg-light-primary text-gray-900',
    secondary: 'bg-light-secondary text-gray-800',
    accent: 'text-light-accent',
    accentBg: 'bg-light-accent text-white',
    border: 'border-light-accent',
    borderSubtle: 'border-light-border',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-600',
    card: 'bg-light-primary text-gray-800',
    cardHover: 'hover:bg-light-tertiary',
    button: 'bg-light-accent text-white hover:bg-light-accent-hover',
    buttonSecondary: 'bg-light-border text-gray-700 hover:bg-gray-300',
    modal: 'bg-light-primary',
    modalBackdrop: 'bg-black/50',
    success: 'text-light-success',
    error: 'text-red-600',
    hover: 'hover:bg-light-tertiary',
    hoverAccent: 'hover:bg-light-accent/5',
  },
  dark: {
    // Dark theme with your custom color palette
    primary: 'bg-obsidian-black text-platinum-silver',
    secondary: 'bg-charcoal-slate text-platinum-silver',
    accent: 'text-champagne-gold',
    accentBg: 'bg-champagne-gold text-obsidian-black',
    border: 'border-champagne-gold',
    borderSubtle: 'border-champagne-gold/20',
    textPrimary: 'text-platinum-silver',
    textSecondary: 'text-platinum-silver/80',
    textMuted: 'text-platinum-silver/60',
    card: 'bg-charcoal-slate text-platinum-silver border border-champagne-gold/20',
    cardHover: 'hover:bg-charcoal-slate/50',
    button: 'bg-champagne-gold text-obsidian-black hover:bg-champagne-gold/90',
    buttonSecondary: 'bg-charcoal-slate text-platinum-silver hover:bg-charcoal-slate/80',
    modal: 'bg-charcoal-slate',
    modalBackdrop: 'bg-obsidian-black/80',
    success: 'text-money-green',
    error: 'text-crimson-red',
    hover: 'hover:bg-charcoal-slate/50',
    hoverAccent: 'hover:bg-champagne-gold/10',
  },
};

// Helper function to get theme classes
export const getThemeClasses = (theme: Theme, variant: keyof typeof themeConfig.dark): string => {
  return themeConfig[theme][variant];
};
