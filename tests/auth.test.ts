/** @vitest-environment node */
import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword, signToken, verifyToken } from '@/lib/auth';

describe('Auth Utilities', () => {
  it('should hash and verify passwords using Argon2', async () => {
    const raw = 'HarconSecurePass2026!';
    const hash = await hashPassword(raw);

    expect(hash).toBeDefined();
    expect(hash).not.toBe(raw);

    const isValid = await verifyPassword(raw, hash);
    expect(isValid).toBe(true);

    const isInvalid = await verifyPassword('WrongPassword', hash);
    expect(isInvalid).toBe(false);
  });

  it('should sign and verify JWT tokens using jose', async () => {
    const payload = {
      userId: 'user-123',
      email: 'admin@harconprecision.com',
      role: 'ADMIN',
      name: 'Harcon Admin',
    };

    const token = await signToken(payload);
    expect(typeof token).toBe('string');

    const verified = await verifyToken(token);
    expect(verified.userId).toBe(payload.userId);
    expect(verified.email).toBe(payload.email);
    expect(verified.role).toBe(payload.role);
    expect(verified.name).toBe(payload.name);
  });
});
