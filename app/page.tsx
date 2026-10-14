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
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';

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
            <div className="col left-side-col"></div>
            <div className="col text-col">
              <div className="text-container">
                <h1>
                  High Precision Sheet Metal Fabrication and Machining
                </h1>
                <p>
                  We build the critical components for computers, electronics, medical, and biomedical industries. Trusted by industry leaders since 1969, our San Diego facility delivers exact tolerances and reliable production runs.
                </p>
                <div className="buttons-container">
                  <Link
                    href="#"
                    className="btn-third"
                  >
                    <span>Request a Quote</span>
                  </Link>
                  <Link
                    href="#"
                    className="btn-third"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>
              <div className="bottom-row">
                <QualificationsBand />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <QualificationsBand /> */}

      <FacilityAndCapacity />

      <PrecisionCapabilities />

      <ServicesColumns />

      <WhyChooseUs />

      <Portfolio />

    </div>
  );
}
