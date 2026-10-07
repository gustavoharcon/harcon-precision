import {
  ArrowRight,
  Layers,
  Cpu,
  Cog,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Gauge,
  Factory,
} from 'lucide-react';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalCTA } from '@/components/GlobalCTA';
import FacilityAndCapacity from '@/components/FacilityAndCapacity';
import ServicesColumns from '@/components/ServicesColumns';
import FabricationServices from '@/components/FabricationServices';
import PrecisionCapabilities from '@/components/PrecisionCapabilities';
import QualificationsBand from '@/components/QualificationsBand';

export const metadata: Metadata = {
  title: 'Harcon Precision Metals | Sheet Metal Fabrication & CNC Machining',
  description:
    'High precision sheet metal fabrication and CNC machining for electronics, medical, and aerospace industries since 1979 in San Diego, CA.',
};

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col text-col">
              {/* <div className="badge-tag">
                <span>Precision Sheet Metal Fabrication</span>
              </div> */}
              <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.15' }}>
                High Precision Sheet Metal Fabrication and Machining
              </h1>

              <p>
                We build the critical components for computers, electronics, medical, and biomedical industries. Our San Diego facility delivers exact tolerances and reliable production runs.
              </p>

              <div className="buttons-container">
                <Link
                  href="#"
                  className="btn-fourth"
                >
                  <span>Request a Quote</span>
                </Link>
                <Link
                  href="#"
                  className="btn-fifth"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
            <div className="col certifications">
              <p className="title">ISO 9001:2015 Certified</p>
              <Image src="https://res.cloudinary.com/irwujctd/image/upload/v1786123668/ISO-9001-2015-white-logo_opkqbj.png" alt="ISO 9001:2015 Certified" width={100} height={100} />
            </div>
          </div>
        </div>
      </section>

      <QualificationsBand />

      <FacilityAndCapacity />

      <PrecisionCapabilities />

      <ServicesColumns />


      {/* SECTION 2: TRUST BAR (50/50 Split) */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div className="badge-tag">
                <ShieldCheck size={14} />
                <span>San Diego Plant & Equipment</span>
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>A Solid Reputation Built on Precision</h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  marginBottom: '2rem',
                  lineHeight: '1.7',
                }}
              >
                Operating out of our expansive facility in San Diego, Harcon Precision Metals
                combines top-tier engineering talent with advanced technology. We specialize in
                manufacturing complex, high-tolerance components for highly demanding technological
                fields.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: 600, color: '#f1f5f9' }}>
                    Advanced CAD/CAM integration
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: 600, color: '#f1f5f9' }}>
                    SolidWorks 3D Modeling experts
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: 600, color: '#f1f5f9' }}>
                    Driven by MIETrak Pro efficiency
                  </span>
                </div>
              </div>

              <Link href="/about" className="btn-secondary">
                <span>Learn More About Our Facility</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Visual with floating "60,000 sq. ft. Facility" badge */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '200px',
                    height: '200px',
                    background:
                      'radial-gradient(circle, rgba(255, 94, 20, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                  }}
                />

                {/* Floating 60,000 sq ft facility badge */}
                <div
                  style={{
                    alignSelf: 'flex-start',
                    background: 'rgba(255, 94, 20, 0.95)',
                    color: '#ffffff',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '0 8px 25px rgba(255, 94, 20, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.05em',
                  }}
                >
                  <Building2 size={20} />
                  <span>60,000 sq. ft. Facility</span>
                </div>

                <div style={{ marginTop: '3rem' }}>
                  <div
                    style={{
                      color: 'var(--accent-steel)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-display)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Industrial Production Hub
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem' }}>
                    1790 Dornoch Court, San Diego, CA
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                    Full-scale manufacturing under one roof: automated laser cutting, multi-axis CNC
                    milling & turning, press brakes, robotic welding, and climate-controlled CMM
                    quality verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
