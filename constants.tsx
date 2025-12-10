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
  CalendarIcon,
  UserGroupIcon,
  UsersIcon,
  AcademicCapIcon,
  DonationIcon,
  PayPalIcon,
  MyVancoIcon,
} from './components/Icons';
import PDFViewer from './components/PDFViewer';
import { SectionContent, SectionButton } from './components/SectionContent';
import { ThemedIcon } from './components/ThemedIcon';
import { DailyPrayersContent } from './components/DailyPrayersContent';

export const LOGO_BASE64 = '/logo.png';

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: 'Free Book: The Orthodox Way',
    icon: <ThemedIcon icon={BookOpenIcon} />,
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
    icon: <ThemedIcon icon={CalendarIcon} />,
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
    icon: <ThemedIcon icon={VideoCameraIcon} />,
    content: (
      <SectionContent>
        <p>
          Join our weekly Wednesday Bible study sessions on Zoom where we delve into the scriptures with Fr. Aristidis.
        </p>
        <SectionButton
          onClick={() => window.open('https://us02web.zoom.us/j/3513199139?pwd=MW1zQnNjKzVTeFdBUDB5NTZtYnFSZz09')}
        >
          Join Zoom Meeting
        </SectionButton>
      </SectionContent>
    ),
  },
  {
    id: 4,
    title: 'Divine Liturgy / Orthros Live',
    icon: <ThemedIcon icon={UserGroupIcon} />,
    content: (
      <SectionContent>
        <p>Watch our services live from anywhere. Click the link below to join the stream.</p>
        <SectionButton onClick={() => window.open('https://www.youtube.com/@saintandreworthodoxgreekch153/streams')}>
          Watch Live Stream
        </SectionButton>
      </SectionContent>
    ),
  },
  {
    id: 5,
    title: 'Daily Prayers',
    icon: <ThemedIcon icon={SparklesIcon} />,
    content: <DailyPrayersContent />,
  },
  {
    id: 6,
    title: 'Weekly Newsletter',
    icon: <ThemedIcon icon={NewspaperIcon} />,
    content: (
      <SectionContent>
        <p>Stay up to date with the latest news, events, and announcements from our community.</p>
        <PDFViewer pdfUrl='/Weekly Newsletter - 09-21-2025.pdf' title='Upcoming Events' />
      </SectionContent>
    ),
  },
  {
    id: 7,
    title: 'Iconography',
    icon: <ThemedIcon icon={PaintingIcon} />,
    content: (
      <SectionContent>
        <h3 className='text-xl font-bold mb-4'>The Art of Sacred Icons</h3>
        <p className='mb-4'>
          Iconography plays a vital role in Orthodox worship and spirituality. Sacred icons are not mere decorations,
          but windows to heaven that help us connect with the divine.
        </p>
        <div className='space-y-4'>
          <div>
            <h4 className='text-lg font-semibold mb-2'>Traditional Iconography</h4>
            <p>
              Our church features traditional Byzantine-style icons hand-painted by skilled iconographers following
              ancient techniques and theological principles.
            </p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-2'>Meaning and Purpose</h4>
            <p>
              Each icon tells a story and serves as a focal point for prayer and meditation, connecting the faithful
              with the saints and events they depict.
            </p>
          </div>
        </div>
      </SectionContent>
    ),
  },
  {
    id: 8,
    title: 'YAL Activity Form',
    icon: <ThemedIcon icon={AcademicCapIcon} />,
    content: (
      <SectionContent>
        <PDFViewer pdfUrl='https://docs.google.com/forms/d/e/1FAIpQLSfqInnsn__Bj4dKpoheVMxH9ZL8537bLZGtV_QW_DyTfWeK3g/viewform' />
      </SectionContent>
    ),
  },
  {
    id: 9,
    title: 'Donate Now',
    icon: <ThemedIcon icon={DonationIcon} />,
    content: (
      <SectionContent>
        <h3 className='text-xl font-bold mb-10'>
          Your generous donations help us continue our mission and serve our community.
        </h3>

        <div className='space-y-4'>
          <div className='flex flex-row space-x-8'>
            <div
              className='flex flex-col items-center space-y-2 cursor-pointer hover:opacity-80 transition-opacity'
              onClick={() => window.open('https://www.paypal.com/donate?hosted_button_id=W4Z3EMDW2QZ4E', '_blank')}
            >
              <ThemedIcon icon={PayPalIcon} />
              <span className='text-center font-medium'>Donate via PayPal</span>
            </div>

            <div
              className='flex flex-col items-center space-y-2 cursor-pointer hover:opacity-80 transition-opacity'
              onClick={() => window.open('https://secure.myvanco.com/YKYD', '_blank')}
            >
              <ThemedIcon icon={MyVancoIcon} />
              <span className='text-center font-medium'>Donate via Vanco</span>
            </div>
            <p className='text-sm'>
              <strong>Mail-in checks and money orders:</strong>
              <br />
              St Andrew GOC
              <br />
              7901 North Kendal Drive
              <br />
              Miami, FL 33156
            </p>
          </div>
        </div>
      </SectionContent>
    ),
  },

  {
    id: 10,
    title: 'Volunteer For The Greek Festival!',
    icon: <ThemedIcon icon={CalendarIcon} />,
    content: (
      <SectionContent>
        <PDFViewer pdfUrl='https://docs.google.com/forms/d/e/1FAIpQLSdqPdy20D45J7lk40-y2m6FmKE8p0I9bRJuXhCG9kiA87_E1Q/viewform?pli=1' />
      </SectionContent>
    ),
  },
];
