import React from 'react';
import { Section } from '../types';

interface SectionCardProps {
  section: Section;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-full p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4 text-left transition-all duration-200 transform hover:translate-x-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#28348a] focus:ring-opacity-50 touch-manipulation group'
    >
      <div className='flex-shrink-0 transition-transform duration-200 group-hover:scale-110'>{section.icon}</div>
      <div className='flex-1 min-w-0'>
        <h3 className='text-base sm:text-lg font-bold text-[#28348a] leading-tight transition-colors duration-200 group-hover:text-blue-800'>
          {section.title}
        </h3>
      </div>
      <div className='ml-auto flex-shrink-0 opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-[#28348a]'
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
