import type { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Riara Schools - our history, mission, vision, core values, leadership team, and commitment to excellence in education.',
};

export default function AboutPage() {
  return <AboutContent />;
}

