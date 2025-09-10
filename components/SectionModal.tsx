import React, { useState, useEffect, useCallback } from 'react';
import { Section } from '../types';

interface SectionModalProps {
  section: Section;
  onClose: () => void;
}

const SectionModal: React.FC<SectionModalProps> = ({ section, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsShowing(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleClose]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4'>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isShowing ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto transition-all duration-300 ease-in-out z-10 max-h-[98vh] sm:max-h-[95vh] overflow-hidden ${
          isShowing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <header className='flex items-center justify-between p-3 sm:p-4 border-b border-gray-200'>
          <div className='flex items-center space-x-2 sm:space-x-3 min-w-0'>
            <div className='flex-shrink-0 bg-blue-100 rounded-full p-1.5 sm:p-2'>{section.icon}</div>
            <h2 className='text-base sm:text-lg font-bold text-gray-800 truncate'>{section.title}</h2>
          </div>
          <button
            onClick={handleClose}
            className='text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 sm:h-6 sm:w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </header>
        <div className='p-2 sm:p-4 overflow-y-auto max-h-[calc(98vh-80px)] sm:max-h-[calc(95vh-100px)]'>
          {section.content}
        </div>
      </div>
    </div>
  );
};

export default SectionModal;
