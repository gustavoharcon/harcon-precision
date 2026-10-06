import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building,
  Calendar,
  Database,
  CheckCircle,
  Award,
  Code2,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { GlobalCTA } from '@/components/GlobalCTA';

export const metadata: Metadata = {
  title: 'About Harcon Precision Metals | San Diego Precision Manufacturing',
  description:
    'Learn about Harcon Precision Metals: founded in 1979, operating a 60,000 sq. ft. San Diego facility with MIETrak Pro ERP tracking.',
};

export default function AboutPage() {
  return (
    <div>
      {/* SECTION 1: HEADER */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, #111827 0%, #0a0e17 100%)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div className="badge-tag">
            <Award size={14} />
            <span>Company History & Mission</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>About Harcon Precision Metals</h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              maxWidth: '750px',
              lineHeight: '1.6',
            }}
          >
            Four decades of precision metal craftsmanship, cutting-edge machine engineering, and
            client-dedicated manufacturing solutions.
          </p>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW (60/40 Split) */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left 60% Content */}
            <div style={{ flex: '1 1 58%' }}>
              <div className="badge-tag">
                <span>Legacy of Precision</span>
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>Decades of Manufacturing Excellence</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                }}
              >
                <p>
                  Founded in 1979, Harcon Precision Metals was established with a singular objective:
                  to deliver the highest precision sheet metal fabrication and CNC machining
                  services with unmatched accountability and craftsmanship.
                </p>
                <p>
                  Over more than 40 years, our team has grown alongside our clients in high-stakes
                  industries—including commercial avionics, medical diagnostics, telecommunications,
                  and defense. We invest continuously in high-speed fiber laser cutting systems,
                  multi-axis automated CNC machining centers, and comprehensive shop floor scheduling
                  software.
                </p>
                <p>
                  Today, our unified 60,000 square foot facility in San Diego brings together
                  engineering consultation, prototyping, high-volume production, robotic welding,
                  chemical finishing, and turn-key mechanical assembly under one rigorous quality
                  control system.
                </p>
              </div>
            </div>

            {/* Right 40% Sidebar Stats */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-orange)',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '1rem',
                }}
              >
                Core Milestones & Scale
              </h3>

              {/* Stat 1 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 94, 20, 0.1)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-orange)',
                  }}
                >
                  <Calendar size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    Founded in 1979
                  </div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    Over 45 continuous years of precision manufacturing leadership in Southern
                    California.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(56, 189, 248, 0.1)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-steel)',
                  }}
                >
                  <Building size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    60,000 sq. ft. Facility
                  </div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    Expansive headquarters located at 1790 Dornoch Court in San Diego, CA.
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(245, 158, 11, 0.1)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-amber)',
                  }}
                >
                  <Database size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    MIETrak Pro ERP Tracking
                  </div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    Comprehensive digital shop-floor tracking from initial RFQ quoting to job
                    delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECH & QUALITY */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4.5rem' }}>
            <div className="badge-tag">
              <Cpu size={14} />
              <span>Engineered Advantage</span>
            </div>
            <h2>Technology & Quality Assurance</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Row 1: Driven by Advanced Software */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="badge-tag">
                  <Code2 size={14} />
                  <span>CAD / CAM / ERP</span>
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                  Driven by Advanced Software
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  At Harcon, high precision starts long before metal is shaped. Our engineering team
                  utilizes SolidWorks 3D Modeling and specialized sheet metal unfolding algorithms
                  directly integrated with our CNC machine controls.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>Direct import of STEP, IGES, DXF, and SolidWorks CAD files</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>
                      Real-time CNC nesting to minimize raw material waste and lower part cost
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>Automated toolpath generation reducing programming lead times</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-steel)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Software Integration Suite
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <li style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>MIETrak Pro ERP:</strong> Real-time production
                    visibility, job routing, inventory control, and traceable lot numbers.
                  </li>
                  <li style={{ borderLeft: '3px solid var(--accent-steel)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>SolidWorks 3D:</strong> Complete Design for
                    Manufacturability (DFM) reviews to prevent costly tooling rework.
                  </li>
                  <li style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>CAMWorks & Amada AP100:</strong> Direct
                    multi-axis CNC machine programming and automated nesting.
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2: Efficiency & Cost Control */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3.5rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  order: 2,
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-orange)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Quality Control Standards
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <li style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>Calibrated CMM Inspection:</strong> First
                    Article Inspections (FAI) and automated dimensional verification down to
                    ±0.0001".
                  </li>
                  <li style={{ borderLeft: '3px solid var(--accent-steel)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>Material Traceability:</strong> Mill test
                    reports, certificates of conformance, and compliance documentation.
                  </li>
                  <li style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '1rem' }}>
                    <strong style={{ color: '#fff' }}>Lean Manufacturing:</strong> Continuous
                    improvement pipelines eliminating waste across sheet metal cutting and
                    machining.
                  </li>
                </ul>
              </div>

              <div style={{ order: 1 }}>
                <div className="badge-tag">
                  <TrendingUp size={14} />
                  <span>Cost Optimization</span>
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                  Efficiency & Cost Control
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  We understand that manufacturing success depends on balancing uncompromising
                  precision with commercial feasibility. Through automated barcode labor tracking
                  and material optimization in MIETrak Pro, we deliver transparent, competitive
                  pricing on every production run.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>
                      Elimination of duplicate tooling through comprehensive in-house tooling
                      libraries
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>
                      Rapid quote turnarounds backed by historical ERP production benchmarks
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--accent-orange)' }} />
                    <span>
                      Just-In-Time (JIT) Kanban scheduling support for high-volume enterprise
                      orders
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REUSABLE GLOBAL CTA SECTION */}
      <GlobalCTA />
    </div>
  );
}
