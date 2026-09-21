import { Router, Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

export const catalogRouter = Router();

// GET /api/services
catalogRouter.get('/services', async (_req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { sortOrder: 'asc' }
    });
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve services catalog' });
  }
});

// GET /api/services/:slug
catalogRouter.get('/services/:slug', async (req: Request, res: Response) => {
  try {
    const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
    const service = await prisma.service.findUnique({
      where: { slug }
    });

    if (!service) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }

    res.status(200).json({ service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve service' });
  }
});

// GET /api/equipment
catalogRouter.get('/equipment', async (_req: Request, res: Response) => {
  try {
    const equipment = await prisma.equipment.findMany({
      orderBy: { sortOrder: 'asc' }
    });

    // Grouping by category for the tabbed UI on frontend
    const grouped = {
      SHEET_METAL: equipment.filter(e => e.category === 'SHEET_METAL'),
      CNC_MACHINING: equipment.filter(e => e.category === 'CNC_MACHINING'),
      SOFTWARE_QC: equipment.filter(e => e.category === 'SOFTWARE_QC'),
    };

    res.status(200).json({
      equipment,
      grouped
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve equipment catalog' });
  }
});
