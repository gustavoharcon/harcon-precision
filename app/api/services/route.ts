import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { Service } from '@/models/Service';

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find().sort({ sortOrder: 1 });
    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    console.error('Fetch services error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve services catalog' },
      { status: 500 }
    );
  }
}
