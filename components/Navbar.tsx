'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Request a Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            {/* <img src={harcon_precision_logo} alt={} /> */}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Nav CTA Group */}
          <div className="nav-cta-group">
            <a href="tel:6194235544" className="phone-quick">
              <Phone size={16} style={{ color: 'var(--accent-orange)' }} />
              <span>(619) 423-5544</span>
            </a>

            <Link
              href="/quote"
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={16} />
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              style={{ fontSize: '1.1rem', padding: '0.5rem 0' }}
            >
              {link.name}
            </Link>
          ))}
          <div
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <a
              href="tel:6194235544"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-muted)',
              }}
            >
              <Phone size={16} /> (619) 423-5544
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}
            >
              Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
