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
      className='w-full bg-white rounded-xl shadow-lg p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4 text-left transition-all duration-200 transform hover:translate-x-2 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#28348a] focus:ring-opacity-50 touch-manipulation'
    >
      <div className='flex-shrink-0 bg-blue-100 rounded-full p-2.5 sm:p-3'>{section.icon}</div>
      <div className='flex-1 min-w-0'>
        <h3 className='text-sm sm:text-md font-bold text-gray-800 leading-tight'>{section.title}</h3>
      </div>
      <div className='ml-auto flex-shrink-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-400'
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
