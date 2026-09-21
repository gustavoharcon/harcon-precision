import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword, signToken, verifyToken } from '../src/lib/auth.js';

describe('Security & Authentication (Argon2 + jose)', () => {
  it('should hash password and verify successfully with Argon2', async () => {
    const rawPassword = 'SecurePassword2026!';
    const hash = await hashPassword(rawPassword);

    expect(hash).toBeDefined();
    expect(hash).toContain('$argon2');

    const isValid = await verifyPassword(rawPassword, hash);
    expect(isValid).toBe(true);

    const isWrongValid = await verifyPassword('WrongPassword', hash);
    expect(isWrongValid).toBe(false);
  });

  it('should sign and verify JWT tokens using jose', async () => {
    const payload = {
      userId: 'test-user-uuid',
      email: 'test@harconprecision.com',
      role: 'ADMIN',
      name: 'Test Administrator',
    };

    const token = await signToken(payload, '1h');
    expect(typeof token).toBe('string');
    expect(token.split('.')).toHaveLength(3);

    const verified = await verifyToken(token);
    expect(verified.userId).toBe(payload.userId);
    expect(verified.email).toBe(payload.email);
    expect(verified.role).toBe(payload.role);
    expect(verified.name).toBe(payload.name);
  });
});
