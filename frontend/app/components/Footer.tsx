import { Link } from 'react-router';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-icon">H</div>
              <div className="brand-text">
                <span className="brand-title">HARCON</span>
                <span className="brand-subtitle">PRECISION METALS</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '320px' }}>
              High Precision Sheet Metal Fabrication and Machining. Delivering state-of-the-art manufacturing for the electronics, medical, and aerospace industries since 1979.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-steel)', fontSize: '0.82rem', fontFamily: 'var(--font-display)' }}>
              <ShieldCheck size={16} />
              <span>MIETrak Pro ERP Certified Facility</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Harcon</Link></li>
              <li><Link to="/services">Capabilities</Link></li>
              <li><Link to="/equipment">Equipment Roster</Link></li>
              <li><Link to="/quote">Request a Quote</Link></li>
              <li><Link to="/contact">Contact Our Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="footer-col">
            <h4>Capabilities</h4>
            <ul className="footer-links">
              <li><Link to="/services">CNC Fiber Laser Cutting</Link></li>
              <li><Link to="/services">Turret Punch Pressing</Link></li>
              <li><Link to="/services">Precision Press Brake Forming</Link></li>
              <li><Link to="/services">Multi-Axis CNC Milling</Link></li>
              <li><Link to="/services">CNC Turning & Live Tooling</Link></li>
              <li><Link to="/services">SolidWorks DFM & Assembly</Link></li>
            </ul>
          </div>

          {/* Column 4: Facility Info */}
          <div className="footer-col">
            <h4>San Diego Facility</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  1790 Dornoch Court<br />
                  San Diego, CA 92154<br />
                  <strong style={{ color: '#fff', fontSize: '0.8rem' }}>60,000 sq. ft. Plant</strong>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
                <a href="tel:6194235544" style={{ color: '#fff' }}>(619) 423-5544</a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
                <a href="mailto:info@harconprecision.com" style={{ color: '#fff' }}>info@harconprecision.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Harcon Precision Metals. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" style={{ color: 'var(--text-dim)' }}>Directions</Link>
            <Link to="/admin" style={{ color: 'var(--text-dim)' }}>Internal Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
