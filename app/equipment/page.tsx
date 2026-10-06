import type { Metadata } from 'next';
import { EquipmentClient } from '@/components/EquipmentClient';

export const metadata: Metadata = {
  title: 'Equipment Roster | Harcon Precision Metals',
  description:
    'Explore our state-of-the-art machinery: Amada Fiber Lasers, CNC Turrets, Press Brakes, Haas Machining Centers, and CMM Quality Inspection.',
};

export default function EquipmentPage() {
  return <EquipmentClient />;
}
