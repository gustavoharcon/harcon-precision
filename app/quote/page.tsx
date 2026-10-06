import type { Metadata } from 'next';
import { QuoteClient } from '@/components/QuoteClient';

export const metadata: Metadata = {
  title: 'Request a Quote | Harcon Precision Metals',
  description:
    'Submit your CAD models and specifications for a fast, accurate manufacturing quote backed by MIETrak Pro estimating.',
};

export default function QuotePage() {
  return <QuoteClient />;
}
