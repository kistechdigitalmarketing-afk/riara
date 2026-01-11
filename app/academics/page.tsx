import type { Metadata } from 'next';
import AcademicsContent from '@/components/sections/AcademicsContent';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore our comprehensive academic programs, curriculum, and educational offerings at Riara Schools.',
};

export default function AcademicsPage() {
  return <AcademicsContent />;
}


