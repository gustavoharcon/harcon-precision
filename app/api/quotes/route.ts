import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import { connectDB } from '@/lib/database';
import { QuoteRequest } from '@/models/QuoteRequest';
import { requireAdmin } from '@/lib/auth';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone number is required'),
  projectDetails: z.string().min(10, 'Project details must be at least 10 characters long'),
});

const ALLOWED_EXTENSIONS = /\.(pdf|dxf|dwg|step|stp|sldprt|zip|iges|igs|png|jpg|jpeg)$/i;
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

export async function POST(req: Request) {
  let uploadedFilePath: string | null = null;
  let originalFileName: string | null = null;

  try {
    const contentType = req.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let phone = '';
    let projectDetails = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      name = (formData.get('name') as string) || '';
      email = (formData.get('email') as string) || '';
      phone = (formData.get('phone') as string) || '';
      projectDetails = (formData.get('projectDetails') as string) || '';

      const file = formData.get('file') as File | null;
      if (file && typeof file === 'object' && 'name' in file && file.size > 0) {
        originalFileName = file.name;

        if (!ALLOWED_EXTENSIONS.test(file.name)) {
          return NextResponse.json(
            { error: 'Invalid file type. Allowed files: PDF, DXF, DWG, STEP/STP, SLDPRT, IGES, ZIP, PNG, JPG' },
            { status: 400 }
          );
        }

        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: 'File size exceeds maximum allowed limit of 25MB.' },
            { status: 400 }
          );
        }

        const uploadDir = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const ext = path.extname(file.name);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const diskFileName = `rfq-${uniqueSuffix}${ext}`;
        uploadedFilePath = path.join(uploadDir, diskFileName);

        const arrayBuffer = await file.arrayBuffer();
        await fs.promises.writeFile(uploadedFilePath, Buffer.from(arrayBuffer));
      }
    } else {
      const body = await req.json();
      name = body.name || '';
      email = body.email || '';
      phone = body.phone || '';
      projectDetails = body.projectDetails || '';
    }

    const validationResult = quoteSchema.safeParse({
      name,
      email,
      phone,
      projectDetails,
    });

    if (!validationResult.success) {
      if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
        try {
          fs.unlinkSync(uploadedFilePath);
        } catch {
          // ignore cleanup error
        }
      }
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

    await connectDB();

    const quote = await QuoteRequest.create({
      name,
      email,
      phone,
      projectDetails,
      filePath: uploadedFilePath,
      fileName: originalFileName,
    });

    return NextResponse.json(
      {
        message: 'Quote request submitted successfully. Our engineering team will review your specifications.',
        quote: {
          id: quote.id,
          name: quote.name,
          email: quote.email,
          phone: quote.phone,
          projectDetails: quote.projectDetails,
          fileName: quote.fileName,
          status: quote.status,
          createdAt: quote.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
      try {
        fs.unlinkSync(uploadedFilePath);
      } catch {
        // ignore
      }
    }
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit quote request' },
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
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });

    return NextResponse.json({ quotes }, { status: 200 });
  } catch (error) {
    console.error('Fetch quotes error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve quote requests' },
      { status: 500 }
    );
  }
}
