import type { Metadata } from 'next';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Harcon Precision Metals',
  description:
    'Contact Harcon Precision Metals at 1790 Dornoch Court, San Diego, CA 92154. Call (619) 423-5544 for inquiries.',
};

export default function ContactPage() {
  return <ContactClient />;
}
