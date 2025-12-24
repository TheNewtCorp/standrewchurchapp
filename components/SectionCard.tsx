import React from 'react';
import { Section } from '../types';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

interface SectionCardProps {
  section: Section;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 sm:p-6 flex flex-col items-center justify-center space-y-3 sm:space-y-4
        transition-all duration-200 transform hover:scale-110 active:scale-95 
        focus:outline-none group cursor-pointer bg-transparent
      `}
    >
      <div className='flex-shrink-0 transition-transform duration-200 group-hover:scale-110'>{section.icon}</div>
      <div className='flex-1 flex items-center justify-center text-center'>
        <h3
          className={`
          text-sm sm:text-base font-bold leading-tight transition-colors duration-200
          ${getThemeClasses(theme, 'accent')}
          ${theme === 'dark' ? 'group-hover:text-champagne-gold/80' : 'group-hover:text-light-accent-hover'}
        `}
        >
          {section.title}
        </h3>
      </div>
    </button>
  );
};

export default SectionCard;
