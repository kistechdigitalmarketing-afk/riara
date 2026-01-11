import type { Metadata } from 'next';
import NewsContent from '@/components/sections/NewsContent';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, announcements, and upcoming events at Riara Schools.',
};

export default function NewsPage() {
  return <NewsContent />;
}

