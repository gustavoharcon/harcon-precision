import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

export const quotesRouter = Router();

// Ensure upload directory exists
const uploadDir = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `rfq-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25 MB limit for CAD / PDF files
  fileFilter: (_req, file, cb) => {
    const allowedExtensions = /pdf|dxf|dwg|step|stp|sldprt|zip|iges|igs|png|jpg|jpeg/i;
    const extName = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
    if (extName) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Allowed files: PDF, DXF, DWG, STEP/STP, SLDPRT, IGES, ZIP, PNG, JPG'));
    }
  }
});

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone number is required'),
  projectDetails: z.string().min(10, 'Project details must be at least 10 characters long'),
});

// POST /api/quotes
quotesRouter.post('/', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const validationResult = quoteSchema.safeParse(req.body);
    if (!validationResult.success) {
      // If a file was uploaded but validation failed, clean up the file
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      res.status(400).json({
        error: 'Validation failed',
        details: validationResult.error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
      return;
    }

    const { name, email, phone, projectDetails } = validationResult.data;
    const filePath = req.file ? req.file.path : null;
    const fileName = req.file ? req.file.originalname : null;

    const quote = await prisma.quoteRequest.create({
      data: {
        name,
        email,
        phone,
        projectDetails,
        filePath,
        fileName,
      }
    });

    res.status(201).json({
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
      }
    });
  } catch (error: any) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message || 'Failed to submit quote request' });
  }
});

// GET /api/quotes (Admin only)
quotesRouter.get('/', authenticateToken, requireAdmin, async (_req: Request, res: Response) => {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ quotes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve quote requests' });
  }
});

// GET /api/quotes/:id (Admin only)
quotesRouter.get('/:id', authenticateToken, requireAdmin, async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const quote = await prisma.quoteRequest.findUnique({
      where: { id }
    });

    if (!quote) {
      res.status(404).json({ error: 'Quote request not found' });
      return;
    }

    res.status(200).json({ quote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote request' });
  }
});
