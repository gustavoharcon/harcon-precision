import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { QuoteRequest } from '@/models/QuoteRequest';
import { requireAdmin } from '@/lib/auth';

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdmin(req);
    if (auth.error || !auth.user) {
      return NextResponse.json(
        { error: auth.error || 'Access denied' },
        { status: auth.status || 403 }
      );
    }

    const { id } = await context.params;

    await connectDB();
    const quote = await QuoteRequest.findById(id);

    if (!quote) {
      return NextResponse.json({ error: 'Quote request not found' }, { status: 404 });
    }

    return NextResponse.json({ quote }, { status: 200 });
  } catch (error) {
    console.error('Fetch quote by id error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quote request' },
      { status: 500 }
    );
  }
}
