import type { Metadata } from 'next';
import AdmissionsContent from '@/components/sections/AdmissionsContent';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Learn about the admission process, requirements, fees, and how to apply to Riara Schools.',
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}


