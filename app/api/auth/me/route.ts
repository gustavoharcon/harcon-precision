import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import { User } from '@/models/User';
import { authenticateToken } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const auth = await authenticateToken(req);
    if (auth.error || !auth.user) {
      return NextResponse.json(
        { error: auth.error || 'Unauthorized' },
        { status: auth.status || 401 }
      );
    }

    await connectDB();

    const user = await User.findById(auth.user.userId).select('id email name role createdAt');
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Fetch me error:', error);
    return NextResponse.json({ error: 'Failed to fetch current user' }, { status: 500 });
  }
}
