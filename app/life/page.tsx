import type { Metadata } from 'next';
import LifeContent from '@/components/sections/LifeContent';

export const metadata: Metadata = {
  title: 'Life at Riara',
  description: 'Explore co-curricular activities, student welfare, boarding facilities, and daily life at Riara Schools.',
};

export default function LifePage() {
  return <LifeContent />;
}


