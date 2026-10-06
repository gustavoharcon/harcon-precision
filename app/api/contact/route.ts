import { NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB } from '@/lib/database';
import { ContactMessage } from '@/models/ContactMessage';
import { requireAdmin } from '@/lib/auth';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional().nullable(),
  subject: z.string().optional().nullable(),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = validationResult.data;

    await connectDB();

    const contactMessage = await ContactMessage.create({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    });

    return NextResponse.json(
      {
        message: 'Message received. We will respond promptly.',
        contactMessage: {
          id: contactMessage.id,
          name: contactMessage.name,
          email: contactMessage.email,
          subject: contactMessage.subject,
          status: contactMessage.status,
          createdAt: contactMessage.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submit error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact message' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const auth = await requireAdmin(req);
    if (auth.error || !auth.user) {
      return NextResponse.json(
        { error: auth.error || 'Access denied' },
        { status: auth.status || 403 }
      );
    }

    await connectDB();
    const messages = await ContactMessage.find().sort({ createdAt: -1 });

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Fetch contact messages error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve contact messages' },
      { status: 500 }
    );
  }
}
