import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <div className="badge-tag">
        <span>404 - Not Found</span>
      </div>
      <h1 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
        Page Not Found
      </h1>
      <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
        The requested page could not be located on the Harcon Precision Metals server.
      </p>
      <Link href="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
}
