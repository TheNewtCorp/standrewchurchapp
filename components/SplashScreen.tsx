import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_BASE64 } from '../constants';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`fixed inset-0 flex flex-col justify-center items-center z-50 transition-colors duration-300 ${getThemeClasses(
            theme,
            'primary',
          )}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='flex flex-col items-center space-y-4'
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 transition-colors duration-300 ${getThemeClasses(
                theme,
                'accent',
              )}`}
            >
              Welcome To
            </motion.h1>
            <motion.img
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              src={LOGO_BASE64}
              alt='St. Andrew Greek Orthodox Church Logo'
              className='w-32 sm:w-40 md:w-48 h-auto'
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
