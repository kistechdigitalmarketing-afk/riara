import type { Metadata } from 'next';
import ContactContent from '@/components/sections/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Riara Schools. Contact information, office hours, and location details.',
};

export default function ContactPage() {
  return <ContactContent />;
}


