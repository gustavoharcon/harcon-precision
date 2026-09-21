import { Link } from 'react-router';
import { ArrowRight, FileCheck } from 'lucide-react';

export function GlobalCTA() {
  return (
    <section className="global-cta-section">
      <div className="container">
        <div className="cta-flex">
          <div className="cta-text-wrap">
            <div className="badge-tag">
              <FileCheck size={14} />
              <span>Direct Estimating Inquiries</span>
            </div>
            <h2 style={{ marginBottom: '1rem', color: '#ffffff' }}>
              Ready to Start Your Next Precision Project?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.7' }}>
              Get a fast, accurate, and transparent quote backed by our advanced MIETrak Pro estimating system.
            </p>
          </div>
          <div className="cta-action">
            <Link to="/quote" className="btn-primary" style={{ padding: '1.1rem 2.2rem', fontSize: '1.05rem' }}>
              <span>Request a Quote</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
