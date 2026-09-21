import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';

describe('Contact API Endpoints', () => {
  it('should reject contact form submissions with missing fields', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'Jane Smith',
        // missing email and message
      });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Validation failed');
  });

  it('should protect GET /api/contact without authorization token', async () => {
    const res = await request(app).get('/api/contact');
    expect(res.status).toBe(401);
  });
});
