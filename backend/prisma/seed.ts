import { PrismaClient, EquipmentCategory, Role } from '@prisma/client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Harcon Precision Metals database...');

  // 1. Seed Admin User
  const adminEmail = 'admin@harconprecision.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const passwordHash = await argon2.hash('HarconPrecision2026!');
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        name: 'Harcon Admin',
        role: Role.ADMIN,
      }
    });
    console.log('Created default admin user: admin@harconprecision.com');
  }

  // 2. Seed Services
  const services = [
    {
      slug: 'sheet-metal-fabrication',
      title: 'Sheet Metal Fabrication',
      shortDesc: 'We form, punch, and laser-cut metal to exact specifications for electronics, medical, and aerospace applications.',
      fullDesc: 'From prototype to high-volume production, Harcon Precision Metals provides full-service sheet metal fabrication. Operating from our 60,000 sq. ft. San Diego facility, we leverage CNC punching, laser cutting, precision forming, hardware insertion, and complete assembly.',
      bullets: [
        'High-speed fiber laser cutting with microscopic precision',
        'CNC turret punch presses with multi-tool indexing',
        'Multi-axis precision press brakes with digital angle feedback',
        'Robotic and manual MIG/TIG welding certified for critical applications'
      ],
      sortOrder: 1
    },
    {
      slug: 'high-precision-machining',
      title: 'High Precision Machining',
      shortDesc: 'CNC machining that guarantees tight tolerances across aluminum, stainless steel, and specialty alloys.',
      fullDesc: 'Our CNC machining department is built for rigorous geometric tolerances and superior surface finishes. We handle complex geometries for aerospace brackets, medical instrument housings, and RF microwave electronics chassis.',
      bullets: [
        'Multi-axis vertical and horizontal CNC milling centers',
        'CNC turning with live tooling and sub-spindle capabilities',
        'Tight tolerances down to ±0.0002 inches',
        'Experience with aerospace-grade alloys, titanium, Delrin, and copper'
      ],
      sortOrder: 2
    },
    {
      slug: 'design-and-engineering',
      title: 'Design & Engineering',
      shortDesc: 'Utilizing SolidWorks and CAD/CAM systems to optimize manufacturability and streamline production.',
      fullDesc: 'Our engineering staff partners with clients early in the design phase to drive Design for Manufacturability (DFM). We ingest client CAD models into SolidWorks and CAM software to minimize cycle times, optimize raw material usage, and reduce unit costs.',
      bullets: [
        'Certified SolidWorks 3D Modeling and sheet metal unfolding experts',
        'Direct CAD/CAM machine programming integration',
        'DFM consultations to lower tooling and fabrication expense',
        'Seamless integration with our MIETrak Pro ERP scheduling system'
      ],
      sortOrder: 3
    }
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s
    });
  }
  console.log(`Seeded ${services.length} services.`);

  // 3. Seed Equipment
  const equipmentItems = [
    // Sheet Metal Fabrication
    {
      category: EquipmentCategory.SHEET_METAL,
      title: 'Amada Fiber Laser Cutting System',
      specifications: '4kW High-Power Fiber Resonator | 5ft x 10ft Dual Shuttle Bed',
      description: 'Ultra-fast, high-precision cutting of stainless steel, aluminum, copper, and mild steel with automated material loading.',
      sortOrder: 1
    },
    {
      category: EquipmentCategory.SHEET_METAL,
      title: 'Amada CNC Turret Punch Presses',
      specifications: '33-Ton Capacity | 58-Station Thick Turret with Auto-Index',
      description: 'High-speed punching, forming, tapping, and countersinking in a single automated setup.',
      sortOrder: 2
    },
    {
      category: EquipmentCategory.SHEET_METAL,
      title: 'Amada Precision CNC Press Brakes',
      specifications: 'Up to 150-Ton Capacity | 8-Axis Backgauge Control',
      description: 'Computer-controlled linear scale feedback guaranteeing repeatable, precision angle bends across long production runs.',
      sortOrder: 3
    },
    // CNC Machining
    {
      category: EquipmentCategory.CNC_MACHINING,
      title: 'Haas Multi-Axis CNC Machining Centers',
      specifications: '12,000 RPM Inline Direct-Drive | 40\" x 20\" x 25\" Work Envelope',
      description: 'High-speed roughing and micro-finish milling equipped with wireless intuitive probing systems.',
      sortOrder: 4
    },
    {
      category: EquipmentCategory.CNC_MACHINING,
      title: 'Haas CNC Turning Centers with Live Tooling',
      specifications: '3\" Bar Capacity | 24-Station Turret with C-Axis Positioning',
      description: 'Single-setup mill-turn capability for complex cylindrical shafts, connectors, and aerospace bushings.',
      sortOrder: 5
    },
    // Software & Quality Control
    {
      category: EquipmentCategory.SOFTWARE_QC,
      title: 'MIETrak Pro ERP Manufacturing System',
      specifications: 'Real-Time Shop Floor Barcode Tracking & Advanced Estimating',
      description: 'End-to-end visibility from initial RFQ quoting to inventory, routing, job dispatch, and shipping documentation.',
      sortOrder: 6
    },
    {
      category: EquipmentCategory.SOFTWARE_QC,
      title: 'SolidWorks 3D CAD & CAM Works Integration',
      specifications: 'Native STEP, IGES, DXF, and SolidWorks PRT file ingestion',
      description: 'Direct model-to-machine toolpath generation eliminating translation errors and shortening lead times.',
      sortOrder: 7
    },
    {
      category: EquipmentCategory.SOFTWARE_QC,
      title: 'Coordinate Measuring Machine (CMM) & Optical Comparator',
      specifications: 'Calibrated Precision Measurement to ±0.0001\" with Full Reporting',
      description: 'Comprehensive dimensional inspection, First Article Inspection (FAI), and Certificate of Conformance documentation.',
      sortOrder: 8
    }
  ];

  await prisma.equipment.deleteMany();
  for (const eq of equipmentItems) {
    await prisma.equipment.create({ data: eq });
  }
  console.log(`Seeded ${equipmentItems.length} equipment items.`);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
