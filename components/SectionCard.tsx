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
        w-full p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4 text-left 
        transition-all duration-200 transform hover:translate-x-2 active:scale-95 
        focus:outline-none focus:ring-2 focus:ring-opacity-50 touch-manipulation group
        rounded-xl
        ${getThemeClasses(theme, 'card')}
        ${
          theme === 'dark'
            ? 'hover:bg-charcoal-slate/50 shadow-lg shadow-obsidian-black/20'
            : 'hover:bg-light-tertiary shadow-lg'
        }
        ${theme === 'dark' ? 'focus:ring-champagne-gold' : 'focus:ring-light-accent'}
      `}
    >
      <div className='flex-shrink-0 transition-transform duration-200 group-hover:scale-110'>{section.icon}</div>
      <div className='flex-1 min-w-0'>
        <h3
          className={`
          text-base sm:text-lg font-bold leading-tight transition-colors duration-200
          ${getThemeClasses(theme, 'accent')}
          ${theme === 'dark' ? 'group-hover:text-champagne-gold/80' : 'group-hover:text-light-accent-hover'}
        `}
        >
          {section.title}
        </h3>
      </div>
      <div
        className={`
        ml-auto flex-shrink-0 opacity-60 transition-all duration-200 
        group-hover:opacity-100 group-hover:translate-x-1
      `}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`h-5 w-5 ${getThemeClasses(theme, 'accent')}`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </div>
    </button>
  );
};

export default SectionCard;
