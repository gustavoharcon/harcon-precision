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
import PrecisionCapabilities from '@/components/PrecisionCapabilities';

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
                  href="#"
                  className="btn-fourth"
                >
                  <span>Request a Quote</span>
                </Link>
                <Link
                  href="#"
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

      <PrecisionCapabilities />

    </div>
  );
}
