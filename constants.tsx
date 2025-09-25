import React from 'react';
import { Section } from './types';
import {
  BookOpenIcon,
  BellIcon,
  VideoCameraIcon,
  TvIcon,
  SparklesIcon,
  NewspaperIcon,
  PaintingIcon,
} from './components/Icons';
import PDFViewer from './components/PDFViewer';

export const LOGO_BASE64 = '/logo.png';

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: 'Free Book: The Orthodox Way',
    icon: <BookOpenIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <PDFViewer
        pdfUrl='https://static1.squarespace.com/static/5f6111fe855bbd517414b749/t/637e87857d4e5637c73b71ed/1669236627344/the-orthodox-way_compress.pdf'
        title='Free Book: The Orthodox Way'
      />
    ),
  },
  {
    id: 2,
    title: 'Upcoming Events',
    icon: <BellIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <PDFViewer
        pdfUrl='https://calendar.google.com/calendar/u/0/embed?src=ae2c8d425172176892ad3735443afcf21e94e6ffe3c007af0e82e2f8c02910ae@group.calendar.google.com&ctz=America/New_York'
        title='Upcoming Events'
      />
    ),
  },
  {
    id: 3,
    title: 'Bible Study Zoom',
    icon: <VideoCameraIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>Join our weekly Bible study session on Zoom where we delve into the scriptures.</p>
        <a
          onClick={() => window.open('https://us02web.zoom.us/j/3513199139?pwd=MW1zQnNjKzVTeFdBUDB5NTZtYnFSZz09')}
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
          onClick={() => window.open('https://www.youtube.com/@saintandreworthodoxgreekch153/streams')}
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
        <h4 className='text-lg font-bold'>St. Patrick's Breastplate Prayer For Protection</h4>
        <p>
          I arise today Through a mighty strength, the invocation of the Trinity, Through belief in the Threeness,
          Through confession of the Oneness of the Creator of creation. I arise today Through the strength of Christ's
          birth with His baptism, Through the strength of His crucifixion with His burial, Through the strength of His
          resurrection with His ascension, Through the strength of His descent for the judgment of doom. I arise today
          Through the strength of the love of cherubim, In the obedience of angels, In the service of archangels, In the
          hope of resurrection to meet with reward, In the prayers of patriarchs, In the predictions of prophets, In the
          preaching of apostles, In the faith of confessors, In the innocence of holy virgins, In the deeds of righteous
          men. I arise today, through The strength of heaven, The light of the sun, The radiance of the moon, The
          splendour of fire, The speed of lightning, The swiftness of wind, The depth of the sea, The stability of the
          earth, The firmness of rock. I arise today, through God's strength to pilot me, God's might to uphold me,
          God's wisdom to guide me, God's eye to look before me, God's ear to hear me, God's word to speak for me, God's
          hand to guard me, God's shield to protect me, God's host to save me From snares of devils, From temptation of
          vices, From everyone who shall wish me ill, afar and near. I summon today All these powers between me and
          those evils, Against every cruel and merciless power that may oppose my body and soul, Against incantations of
          false prophets, Against black laws of pagandom, Against false laws of heretics, Against craft of idolatry,
          Against spells of witches and smiths and wizards, Against every knowledge that corrupts man's body and soul;
          Christ to shield me today Against poison, against burning, Against drowning, against wounding, So that there
          may come to me an abundance of reward. Christ with me, Christ before me, Christ behind me, Christ in me,
          Christ beneath me, Christ above me, Christ on my right, Christ on my left, Christ when I lie down, Christ when
          I sit down, Christ when I arise, Christ in the heart of every man who thinks of me, Christ in the mouth of
          everyone who speaks of me, Christ in every eye that sees me, Christ in every ear that hears me.{' '}
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Weekly Newsletter',
    icon: <NewspaperIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>Stay up to date with the latest news, events, and announcements from our community.</p>
        <a
          href='#'
          className='inline-block bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'
        >
          Read Now
        </a>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Iconography',
    icon: <PaintingIcon className='h-8 w-8 text-[#28348a]' />,
    content: (
      <div className='p-4 space-y-4 text-gray-700'>
        <p>
          Check out our online iconography store where you can find a variety of icons to add to your prayer corner!
        </p>
        <a
          href='#'
          className='inline-block bg-[#28348a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors'
        >
          Click To See Our Selection
        </a>
      </div>
    ),
  },
];
