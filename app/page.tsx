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
                  className="btn-third"
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

      <ServicesColumns />

      <PrecisionCapabilities />

    </div>
  );
}
