import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { Equipment } from '@/models/Equipment';

export async function GET() {
  try {
    await connectDB();
    const equipment = await Equipment.find().sort({ sortOrder: 1 });

    const grouped = {
      SHEET_METAL: equipment.filter((e) => e.category === 'SHEET_METAL'),
      CNC_MACHINING: equipment.filter((e) => e.category === 'CNC_MACHINING'),
      SOFTWARE_QC: equipment.filter((e) => e.category === 'SOFTWARE_QC'),
    };

    return NextResponse.json({ equipment, grouped }, { status: 200 });
  } catch (error) {
    console.error('Fetch equipment error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve equipment catalog' },
      { status: 500 }
    );
  }
}
