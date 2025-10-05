import React, { useState } from 'react';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='p-1 sm:p-2 space-y-2 sm:space-y-3'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0'>
        <h4
          className={`text-base sm:text-lg font-bold transition-colors duration-300 ${getThemeClasses(
            theme,
            'textPrimary',
          )}`}
        >
          {title}
        </h4>
        <button
          onClick={openInNewTab}
          className={`px-3 py-2 rounded-lg text-sm transition-colors duration-300 w-full sm:w-auto ${getThemeClasses(
            theme,
            'button',
          )}`}
        >
          Open in New Tab
        </button>
      </div>

      {isLoading && (
        <div className='flex justify-center items-center h-64'>
          <div
            className={`animate-spin rounded-full h-8 w-8 border-b-2 transition-colors duration-300 ${
              theme === 'dark' ? 'border-champagne-gold' : 'border-light-accent'
            }`}
          ></div>
        </div>
      )}

      {hasError ? (
        <div
          className={`text-center p-4 sm:p-8 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-charcoal-slate border border-champagne-gold/20' : 'bg-light-tertiary'
          }`}
        >
          <p
            className={`mb-4 text-sm sm:text-base transition-colors duration-300 ${getThemeClasses(
              theme,
              'textSecondary',
            )}`}
          >
            Unable to display PDF in this view.
          </p>
          <button
            onClick={openInNewTab}
            className={`font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full sm:w-auto ${getThemeClasses(
              theme,
              'button',
            )}`}
          >
            Open PDF in New Tab
          </button>
        </div>
      ) : (
        <div className='relative'>
          <iframe
            src={pdfUrl}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'border border-champagne-gold/20' : 'border border-light-border'
            }`}
            title={title}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
