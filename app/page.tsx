import type { Metadata } from 'next';
import Link from 'next/link';
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
import { GlobalCTA } from '@/components/GlobalCTA';
import FacilityAndCapacity from '@/components/FacilityAndCapacity';
import ServicesColumns from '@/components/ServicesColumns';
import FabricationServices from '@/components/FabricationServices';

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
              <div className="badge-tag">
                <span>Precision Sheet Metal Fabrication</span>
              </div>
              <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.15' }}>
                High Precision Sheet Metal Fabrication and Machining
              </h1>

              <p>
                We build the critical components for computers, electronics, medical, and biomedical industries. Our San Diego facility delivers exact tolerances and reliable production runs.
              </p>

              <div className="buttons-container">
                <Link
                  href="/quote"
                  className="btn-fourth"
                >
                  <span>Request a Quote</span>
                </Link>
                <Link
                  href="/services"
                  className="btn-fifth"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FacilityAndCapacity />

      <ServicesColumns />

      <FabricationServices />

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

      {/* SECTION 3: SERVICES GRID (3 Columns with Icons) */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <div className="badge-tag">
              <Cog size={14} />
              <span>Core Specializations</span>
            </div>
            <h2>Precision Capabilities</h2>
            <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
              Engineered for demanding specifications across aerospace, medical instruments, and
              defense electronics.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Card 1: Sheet Metal Fabrication */}
            <div className="card-industrial">
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(255, 94, 20, 0.1)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-orange)',
                  marginBottom: '1.5rem',
                }}
              >
                <Layers size={28} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Sheet Metal Fabrication</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '1.75rem' }}>
                We form, punch, and laser-cut metal to exact specifications. Utilizing high-power
                fiber lasers, automated turret presses, and precision multi-axis brakes.
              </p>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-orange)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                }}
              >
                <span>Explore Fabrication</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: High Precision Machining */}
            <div className="card-industrial">
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-steel)',
                  marginBottom: '1.5rem',
                }}
              >
                <Cpu size={28} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>High Precision Machining</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '1.75rem' }}>
                CNC machining that guarantees tight tolerances down to ±0.0002". Multi-axis milling
                centers and live-tooling lathes designed for intricate geometry.
              </p>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-steel)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                }}
              >
                <span>Explore Machining</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3: Design & Engineering */}
            <div className="card-industrial">
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-amber)',
                  marginBottom: '1.5rem',
                }}
              >
                <Gauge size={28} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Design & Engineering</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Utilizing SolidWorks and CAD/CAM systems to optimize manufacturability, minimize
                cycle times, and streamline turn-key product assembly.
              </p>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-amber)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                }}
              >
                <span>Explore Engineering</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REUSABLE GLOBAL CTA SECTION */}
      <GlobalCTA />
    </div>
  );
}
