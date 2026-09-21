import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { validateBody } from '../middleware/validate.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

export const contactRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
});

// POST /api/contact
contactRouter.post('/', validateBody(contactSchema), async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      }
    });

    res.status(201).json({
      message: 'Message received. We will respond promptly.',
      contactMessage: {
        id: contactMessage.id,
        name: contactMessage.name,
        email: contactMessage.email,
        subject: contactMessage.subject,
        status: contactMessage.status,
        createdAt: contactMessage.createdAt,
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact message' });
  }
});

// GET /api/contact (Admin only)
contactRouter.get('/', authenticateToken, requireAdmin, async (_req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contact messages' });
  }
});
