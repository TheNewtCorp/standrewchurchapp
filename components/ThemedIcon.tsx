import React from 'react';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

interface ThemedIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const ThemedIcon: React.FC<ThemedIconProps> = ({ icon: Icon, className = 'h-8 w-8' }) => {
  const { theme } = useTheme();

  return <Icon className={`${className} transition-colors duration-300 ${getThemeClasses(theme, 'accent')}`} />;
};
