import dotenv from 'dotenv';
dotenv.config();

import { app } from './app.js';
import { prisma } from './lib/prisma.js';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Successfully connected to the database.');
  } catch (error) {
    console.warn('Warning: Could not connect to the database at startup. API will operate with limited database functionality until DB is active.', error);
  }

  const server = app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(` Harcon Precision Metals API Server`);
    console.log(` Listening on: http://localhost:${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(` Health Check: http://localhost:${PORT}/api/health`);
    console.log(`===============================================`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);
    server.close(async () => {
      await prisma.$disconnect();
      console.log('Database disconnected. Express server stopped.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

bootstrap();
