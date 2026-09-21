import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';

describe('POST /api/quotes Validation', () => {
  it('should return 400 if required fields are missing', async () => {
    const res = await request(app)
      .post('/api/quotes')
      .send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Validation failed');
    expect(res.body).toHaveProperty('details');
    expect(Array.isArray(res.body.details)).toBe(true);
  });

  it('should return 400 if email is invalid', async () => {
    const res = await request(app)
      .post('/api/quotes')
      .send({
        name: 'John Doe',
        email: 'invalid-email',
        phone: '619-555-0199',
        projectDetails: 'We need precision CNC machined aluminum brackets for an aerospace prototype.'
      });

    expect(res.status).toBe(400);
    expect(res.body.details.some((d: any) => d.field === 'email')).toBe(true);
  });

  it('should protect GET /api/quotes without authorization token', async () => {
    const res = await request(app).get('/api/quotes');
    expect(res.status).toBe(401);
  });
});
