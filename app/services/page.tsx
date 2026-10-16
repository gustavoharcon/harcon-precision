import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, Cpu, Wrench, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { GlobalCTA } from '@/components/GlobalCTA';

export const metadata: Metadata = {
  title: 'Our Services | Sheet Metal Fabrication & Machining | Harcon Precision',
  description:
    'Explore Harcon Precision Metals services: Precision Sheet Metal Fabrication, Precision CNC Machining, and Engineering & Value-Added Assembly.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* SECTION 1: HEADER */}
      <section>
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>Turn-Key Manufacturing Capabilities</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Our Services</h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              maxWidth: '750px',
              lineHeight: '1.6',
            }}
          >
            Comprehensive metal manufacturing solutions from initial prototype engineering to
            tight-tolerance CNC production and complete mechanical assembly.
          </p>
        </div>
      </section>

      {/* SECTION 2: OFFERINGS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {/* BLOCK 1: Precision Sheet Metal Fabrication */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="badge-tag">
                  <Layers size={14} />
                  <span>Fabrication Division</span>
                </div>
                <h2 style={{ marginBottom: '1.25rem' }}>Precision Sheet Metal Fabrication</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  We form, punch, and laser-cut metal to exact specifications for electronics
                  enclosures, medical consoles, avionics chassis, and industrial equipment. Our
                  facility combines high-power fiber laser cutting with automated turret punch
                  presses and multi-axis CNC press brakes.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Fiber laser cutting for burr-free edges across aluminum, stainless, and copper
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      CNC turret punch presses with multi-tool indexing for high-speed hole patterns
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Computerized press brakes with precision angle measurement for repeatable
                      bends
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-orange)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      MIG, TIG, and spot welding certified for high-strength cosmetic joints
                    </span>
                  </div>
                </div>

                <Link href="/quote" className="btn-primary">
                  <span>Quote Sheet Metal Project</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Visual Panel */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem 2.5rem',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-orange)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Fabrication Capabilities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      High-Speed Fiber Laser
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      4kW cutting envelope handling sheet sizes up to 5ft x 10ft with microscopic
                      contouring.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      33-Ton Turret Punching
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      58-station thick turret tooling capable of forming louvers, countersinks, and
                      knockouts.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Multi-Axis Press Brakes
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Programmable 8-axis backgauges guaranteeing precision bends up to 10 feet in
                      length.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: Precision Machining (Alternating) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
              }}
            >
              {/* Visual Panel */}
              <div
                style={{
                  order: 2,
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem 2.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-steel)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Machining Specifications
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderLeft: '3px solid var(--accent-steel)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      ±0.0002" Tight Tolerances
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Precision dimensional accuracy maintained across critical aerospace and
                      medical interfaces.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-steel)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Multi-Axis CNC Milling
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      High-speed 12,000 RPM spindles with intuitive touch probing for 3D sculptured
                      surfaces.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-steel)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Live Tooling Lathes
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Integrated turning and milling in a single machine setup to maximize
                      concentricity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div style={{ order: 1 }}>
                <div className="badge-tag">
                  <Cpu size={14} />
                  <span>CNC Machining Division</span>
                </div>
                <h2 style={{ marginBottom: '1.25rem' }}>Precision Machining</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  CNC machining that guarantees tight tolerances across aluminum, stainless steel,
                  titanium, brass, and engineered plastics. We handle complex geometric features
                  requiring true multi-axis precision and flawless surface finishing.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Multi-axis vertical machining centers with rigid thermal stabilization
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      CNC turning with sub-spindle live tooling for single-operation completion
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Dedicated surface grinding and precision de-burring departments
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-steel)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Expertise in aerospace alloys (6061-T6, 7075, 304, 316, Inconel)
                    </span>
                  </div>
                </div>

                <Link href="/quote" className="btn-secondary">
                  <span>Quote Machining Job</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* BLOCK 3: Engineering & Value-Added Assembly */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="badge-tag">
                  <Wrench size={14} />
                  <span>Assembly & Integration</span>
                </div>
                <h2 style={{ marginBottom: '1.25rem' }}>Engineering & Value-Added Assembly</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Our job is not complete when parts come off the machine. Harcon Precision Metals
                  delivers turn-key value-added assembly—including PEM hardware insertion, gasket
                  installation, mechanical subassembly, silk-screening, and protective packaging.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-amber)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Automated PEM hardware and threaded fastener insertion
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-amber)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Certified electrical ground stud and bracket assembly
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-amber)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Anodizing, powder coating, chem-film, and plating network coordination
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent-amber)', flexShrink: 0 }}
                    />
                    <span style={{ color: '#f1f5f9' }}>
                      Final mechanical assembly and custom protective packaging for direct shipping
                    </span>
                  </div>
                </div>

                <Link href="/quote" className="btn-primary">
                  <span>Start Turn-Key Project</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Visual Panel */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #182234 0%, #0d131f 100%)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem 2.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-amber)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1.25rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Turn-Key Finish Services
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Hardware & Fastener Insertion
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Pneumatic Haeger presses with autofeed bowl systems guaranteeing reliable
                      fastener pull-out strength.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Plating & Finishing Networks
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Mil-spec anodizing (Type II / Type III Hardcoat), chem film (MIL-DTL-5541),
                      and powder coating.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '1.25rem' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      Box-Build Subassembly
                    </h4>
                    <p style={{ fontSize: '0.9rem' }}>
                      Kitted and fully assembled chassis delivered ready for electrical wiring and
                      line installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REUSABLE GLOBAL CTA SECTION */}
      <GlobalCTA />
    </div >
  );
}
