'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <div className="badge-tag">
        <span>System Error Notice</span>
      </div>
      <h1 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
        An Unexpected Error Occurred
      </h1>
      <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
        {error.message || 'A server-side execution error was encountered.'}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-secondary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
