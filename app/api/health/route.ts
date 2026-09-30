import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/database';

export async function GET() {
  let dbStatus = 'disconnected';
  try {
    await connectDB();
    if (mongoose.connection.readyState === 1) {
      dbStatus = 'connected';
    } else {
      dbStatus = 'degraded';
    }
  } catch (error) {
    dbStatus = 'degraded';
  }

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    service: 'Harcon Precision Metals API',
    version: '1.0.0',
  });
}
