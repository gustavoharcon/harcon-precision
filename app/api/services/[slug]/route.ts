import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { Service } from '@/models/Service';

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    await connectDB();
    const service = await Service.findOne({ slug });

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.error('Fetch service by slug error:', error);
    return NextResponse.json({ error: 'Failed to retrieve service' }, { status: 500 });
  }
}
