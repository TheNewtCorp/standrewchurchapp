import React, { useState } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
        <h4 className='text-base sm:text-lg font-bold text-gray-800'>{title}</h4>
        <button
          onClick={openInNewTab}
          className='bg-[#28348a] text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors w-full sm:w-auto'
        >
          Open in New Tab
        </button>
      </div>

      {isLoading && (
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#28348a]'></div>
        </div>
      )}

      {hasError ? (
        <div className='text-center p-4 sm:p-8 bg-gray-50 rounded-lg'>
          <p className='text-gray-600 mb-4 text-sm sm:text-base'>Unable to display PDF in this view.</p>
          <button
            onClick={openInNewTab}
            className='bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors w-full sm:w-auto'
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
            className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] border rounded-lg'
            title={title}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      )}

      <div className='text-xs sm:text-sm text-gray-500 text-center px-2'>
        <p>Sunday Before Holy Cross - September 7, 2025</p>
      </div>
    </div>
  );
};

export default PDFViewer;
