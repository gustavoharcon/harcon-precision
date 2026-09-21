import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index.js';
import { setActiveEquipmentTab } from '../store/uiSlice.js';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GlobalCTA } from '../components/GlobalCTA.js';

export function meta() {
  return [
    { title: "Equipment Roster | Harcon Precision Metals" },
    { name: "description", content: "Explore our state-of-the-art machinery: Amada Fiber Lasers, CNC Turrets, Press Brakes, Haas Machining Centers, and CMM Quality Inspection." }
  ];
}

export default function EquipmentPage() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.ui.activeEquipmentTab);

  const tabs = [
    { id: 'SHEET_METAL' as const, label: 'Sheet Metal Fabrication', icon: Layers },
    { id: 'CNC_MACHINING' as const, label: 'CNC Machining', icon: Cpu },
    { id: 'SOFTWARE_QC' as const, label: 'Software & Quality Control', icon: ShieldCheck },
  ];

  const equipmentData = {
    SHEET_METAL: [
      {
        title: 'Amada 4kW High-Power Fiber Laser Cutting System',
        badge: 'Laser Technology',
        specs: '4,000 Watt Resonator | 5ft x 10ft Dual Automated Pallet Shuttle Bed',
        description: 'Delivers ultra-high-speed, burr-free cutting on stainless steel, aluminum, copper, brass, and carbon steel. Features advanced optics and nitrogen assist cutting for oxidized-free edges ready for immediate welding or plating.',
        capabilities: [
          'High cutting speed on thin-to-medium gauge metals',
          'Automatic sheet loader reducing cycle turnaround',
          'Precision micro-joints preserving delicate profiles',
          'Clean edge quality minimizing secondary deburring'
        ]
      },
      {
        title: 'Amada CNC Turret Punch Presses',
        badge: 'Punching & Forming',
        specs: '33-Ton Punching Force | 58-Station Thick Turret with 4 Auto-Index Stations',
        description: 'Equipped with progressive multi-station tooling for high-speed perforation, punching, tapping, countersinking, and forming louvers in a single automated pass.',
        capabilities: [
          'High hit rate for perforated sheet patterns and electronics ventilation',
          'In-machine tapping eliminating secondary manual threading',
          'Extrusion and louver forming capability',
          'Automated tool lubrication for extended die life'
        ]
      },
      {
        title: 'Amada Precision Multi-Axis CNC Press Brakes',
        badge: 'Forming & Bending',
        specs: 'Up to 150-Ton Capacity | 10-Foot Bed Length | 8-Axis Programmable Backgauge',
        description: 'Computer-controlled linear scale feedback and crowning compensation systems ensuring repeatable, precision angular bends across complex production runs.',
        capabilities: [
          'Digital angle sensor compensation for material spring-back',
          'Extensive European precision-ground punch and die tooling library',
          'Multi-stage bend configurations in a single operator setup',
          'Deep box forming and tight radius capabilities'
        ]
      },
      {
        title: 'Haeger Automatic Hardware Insertion Presses',
        badge: 'Fastener Insertion',
        specs: '6-Ton & 8-Ton Hydraulic Pressure | Autofeed Vibratory Bowl Feeders',
        description: 'High-speed automated insertion of threaded PEM studs, standoffs, nuts, and access hardware with programmable insertion force monitoring.',
        capabilities: [
          'Positive stop technology ensuring consistent flush seating',
          'Safety-monitored tooling eliminating fastener distortion',
          'Batch counting to ensure 100% fastener count compliance'
        ]
      }
    ],
    CNC_MACHINING: [
      {
        title: 'Haas Multi-Axis CNC Vertical Machining Centers',
        badge: 'Milling Technology',
        specs: '12,000 RPM Inline Direct-Drive | 40\" x 20\" x 25\" Work Travel | High-Pressure Coolant',
        description: 'High-rigidity vertical milling centers built for aggressive roughing and micro-finish milling. Equipped with Renishaw wireless touch probing systems for automated workpiece and tool setup.',
        capabilities: [
          'Tight geometric tolerances maintained down to ±0.0002\"',
          'Rigid tapping and high-speed look-ahead 3D contouring',
          '30+ station tool changers for complex multi-operation parts',
          'Precision vacuum fixturing for thin-walled aerospace plates'
        ]
      },
      {
        title: 'Haas CNC Turning Centers with Live Tooling',
        badge: 'Turning & Mill-Turn',
        specs: '3\" Bar Feed Capacity | 24-Station Turret | C-Axis Spindle Positioning',
        description: 'Combines heavy-duty CNC turning with live rotary milling tools. Performs turning, off-center milling, drilling, and tapping in a single setup to eliminate multiple handlings and maximize concentricity.',
        capabilities: [
          'Live tooling for hexagonal flats, keyways, and cross-holes',
          'Automated hydraulic tailstock for long shaft rigidity',
          'Sub-spindle transfer for complete front-and-back finishing'
        ]
      },
      {
        title: 'High-Precision Surface Grinders & Deburring Centers',
        badge: 'Finishing & Grinding',
        specs: 'Magnetic Chuck Beds | Timesavers Wet Belt Finishing | Vibratory Tumblers',
        description: 'Dedicated post-machining finishing cells providing micro-inch Ra surface finishes, edge radiusing, and uniform grain lines for cosmetic panels.',
        capabilities: [
          'Parallel grinding within 0.0001\" across planar surfaces',
          'Consistent grain finishing on aluminum and stainless steel faceplates',
          'Centrifugal and vibratory deburring for edge break compliance'
        ]
      }
    ],
    SOFTWARE_QC: [
      {
        title: 'MIETrak Pro ERP Manufacturing Management System',
        badge: 'Digital Infrastructure',
        specs: 'Enterprise Shop Floor Barcode Kiosks | Real-Time Estimating & Scheduling',
        description: 'Complete end-to-end transparency: from instant CAD model quoting to raw material procurement, job routing, machine dispatch, and lot-tracked shipping documentation.',
        capabilities: [
          'Real-time job tracking across every shop floor work center',
          'Accurate scheduling preventing delivery bottlenecks',
          'Historical cost tracking ensuring competitive, transparent customer pricing',
          'Instant inventory stock monitoring for rapid order turnaround'
        ]
      },
      {
        title: 'SolidWorks 3D CAD & CAMWorks Machine Integration',
        badge: 'Engineering Software',
        specs: 'Parametric 3D Solid Modeling | DFM Simulation | Direct CNC Post-Processing',
        description: 'Direct model-to-machine software pipeline. Eliminates translation errors by ingesting native customer 3D models and automatically computing sheet metal stretch allowances and CNC toolpaths.',
        capabilities: [
          'Early Design for Manufacturability (DFM) reviews to reduce unit cost',
          'Automated sheet metal flat pattern unfolding',
          'High-yield multi-part nesting algorithms minimizing sheet scrap'
        ]
      },
      {
        title: 'Coordinate Measuring Machine (CMM) & Optical Comparator',
        badge: 'Quality Assurance',
        specs: 'Calibrated Precision Probe | Renishaw Metrology Software | Full FAI Documentation',
        description: 'Climate-controlled metrology laboratory. Automated multi-axis probe measurement verifying intricate geometric dimensions against original client 3D CAD solid models.',
        capabilities: [
          'First Article Inspection (FAI) reports conforming to AS9102 standards',
          'Statistical Process Control (SPC) dimensional tracking',
          'Certified calibration traceable to NIST standards'
        ]
      }
    ]
  };

  const activeItems = equipmentData[activeTab];

  return (
    <div>
      {/* SECTION 1: HEADER */}
      <section style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(180deg, #111827 0%, #0a0e17 100%)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div className="badge-tag">
            <Gauge size={14} />
            <span>Advanced Facility Machinery</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>State-of-the-Art Equipment</h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '750px', lineHeight: '1.6' }}>
            Investing in premier manufacturing technology ensures the speed, tolerance accuracy, and cost efficiency our clients demand.
          </p>
        </div>
      </section>

      {/* SECTION 2: INTRO (Centered text block) */}
      <section style={{ padding: '4rem 0 2rem', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto 1rem' }}>
            <Sparkles size={14} />
            <span>60,000 Sq. Ft. San Diego Plant</span>
          </div>
          <h2 style={{ marginBottom: '1.25rem' }}>
            Powered by Industry-Leading Technology
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            From high-speed fiber laser cutting and 33-ton automated punching to 5-axis capable CNC milling centers and calibrated CMM inspection, our facility is equipped to handle complex aerospace, medical, and electronics production without outsourcing.
          </p>
        </div>
      </section>

      {/* SECTION 3: ROSTER (Tabbed Interface) */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Tab Navigation Buttons */}
          <div className="tabs-header">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => dispatch(setActiveEquipmentTab(tab.id))}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {activeItems.map((item, index) => (
              <div key={index} className="card-industrial" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--accent-orange)',
                      background: 'rgba(255, 94, 20, 0.1)',
                      border: '1px solid var(--border-accent)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                    {item.title}
                  </h3>

                  <div style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent-steel)',
                    marginBottom: '1rem',
                    letterSpacing: '0.04em'
                  }}>
                    {item.specs}
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#94a3b8' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                    Machine Highlights
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE GLOBAL CTA SECTION */}
      <GlobalCTA />
    </div>
  );
}
