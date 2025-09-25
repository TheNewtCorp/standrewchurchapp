import React, { useState } from 'react';
import { SECTIONS, LOGO_BASE64 } from '../constants';
import { Section } from '../types';
import SectionCard from './SectionCard';
import SectionModal from './SectionModal';

interface MainContentProps {
  isVisible: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isVisible }) => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const openSection = (section: Section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  return (
    <>
      <div
        className={`w-full min-h-screen transition-opacity duration-500 ease-in-out overflow-x-hidden ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <header className='bg-white shadow-md p-3 sm:p-4 flex items-center justify-between sticky top-0 z-10'>
          <div className='flex items-center space-x-2 sm:space-x-3'>
            <img src={LOGO_BASE64} alt='Logo' className='h-8 sm:h-10 w-auto' />
            <div>
              <h1 className='text-base sm:text-lg font-bold text-[#28348a]'>St. Andrew YAL App</h1>
              <p className='text-xs sm:text-sm text-gray-500'>Miami, FL</p>
            </div>
          </div>
        </header>

        <main className='p-3 sm:p-4 md:p-6'>
          <div className='animate-breathe'>
            <div className='grid grid-cols-1 gap-3 sm:gap-4 max-w-2xl mx-auto'>
              {SECTIONS.map((section, index) => (
                <SectionCard key={section.id} section={section} onClick={() => openSection(section)} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {activeSection && <SectionModal section={activeSection} onClose={closeSection} />}
    </>
  );
};

export default MainContent;
