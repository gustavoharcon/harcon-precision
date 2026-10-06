import type { Metadata } from 'next';
import { AdminClient } from '@/components/AdminClient';

export const metadata: Metadata = {
  title: 'Staff Portal | Harcon Precision Metals',
  description: 'Internal management and submission portal for Harcon Precision Metals staff.',
};

export default function AdminPage() {
  return <AdminClient />;
}
