import React from 'react';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContent: React.FC<SectionContentProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 space-y-4 transition-colors duration-300 ${getThemeClasses(theme, 'textSecondary')} ${className}`}
    >
      {children}
    </div>
  );
};

interface SectionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SectionButton: React.FC<SectionButtonProps> = ({ onClick, children, className = '' }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`inline-block font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${getThemeClasses(
        theme,
        'button',
      )} ${className}`}
    >
      {children}
    </button>
  );
};
