import React from 'react';
import { Section } from './types';
import { BookOpenIcon, BellIcon, VideoCameraIcon, TvIcon, SparklesIcon, NewspaperIcon } from './components/Icons';
import PDFViewer from './components/PDFViewer';

export const LOGO_BASE64 = './logo.png';

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: 'Weekly Liturgical Readings',
    icon: <BookOpenIcon className='h-8 w-8 text-[#28348a]' />,
    content: <PDFViewer pdfUrl='/liturgical-readings.pdf' title='Weekly Liturgical Readings' />,
  },
  {
    id: 2,
    title: 'Daily Reminders',
    icon: <BellIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-2 text-gray-700'>
        <h4 className='text-lg font-bold'>Today's Saint</h4>
        <p>Information about the Saint of the day.</p>
        <h4 className='text-lg font-bold'>Fasting Guidelines</h4>
        <p>Information on today's fasting requirements will be available here.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Bible Study Zoom',
    icon: <VideoCameraIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>Join our weekly Bible study session on Zoom. We delve into the scriptures and grow in faith together.</p>
        <a
          href='#'
          className='inline-block bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'
        >
          Join Zoom Meeting
        </a>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Divine Liturgy / Orthros Live',
    icon: <TvIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>Watch our services live from anywhere. Click the link below to join the stream.</p>
        <a
          href='#'
          className='inline-block bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'
        >
          Watch Live Stream
        </a>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Daily Prayers',
    icon: <SparklesIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-2 text-gray-700'>
        <h4 className='text-lg font-bold'>Morning Prayers</h4>
        <p>Start your day with prayer. The text for morning prayers can be found here.</p>
        <h4 className='text-lg font-bold'>Evening Prayers</h4>
        <p>End your day in peace. The text for evening prayers will be available here.</p>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Weekly Newsletter',
    icon: <NewspaperIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>
          Stay up to date with the latest news, events, and announcements from our community. Read the latest weekly
          newsletter here.
        </p>
        <a
          href='#'
          className='inline-block bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'
        >
          Read Now
        </a>
      </div>
    ),
  },
];
