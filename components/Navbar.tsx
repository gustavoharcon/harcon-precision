'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import harcon_precision_logo from '@/public/images/logo/Harcon_Precision_Logo_03_Colored.png';
import Image from 'next/image';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // const links = [
  //   { name: 'Home', href: '/', classes: 'hover-up' },
  //   { name: 'About', href: '/about', classes: 'hover-up' },
  //   { name: 'Services', href: '/services', classes: 'hover-up' },
  //   { name: 'Equipment', href: '/equipment', classes: 'hover-up' },
  //   { name: 'Contact', href: '/contact', classes: 'hover-up' },
  // ];
  const links = [
    { name: 'Home', href: '/', classes: 'hover-up' },
    { name: 'About', href: '#', classes: 'hover-up' },
    { name: 'Services', href: '#', classes: 'hover-up' },
    { name: 'Equipment', href: '#', classes: 'hover-up' },
    { name: 'Contact', href: '#', classes: 'hover-up' },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <Image
              src={harcon_precision_logo}
              alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'Harcon Precision Metals'}
              width={0}
              height={0}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-plex-sans ${isActive ? 'active' : ''} ${link.classes}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Nav CTA Group */}
          <div className="nav-cta-group">
            <a href="tel:6194235544" className="phone-quick">
              <Phone size={16} />
              <span>(619) 423-5544</span>
            </a>

            <Link
              href="/quote"
              className="btn-third"
            >
              <span>Get a Quote</span>
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
            >
              <Phone size={16} /> (619) 423-5544
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
