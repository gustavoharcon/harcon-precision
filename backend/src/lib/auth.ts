import argon2 from 'argon2';
import { SignJWT, jwtVerify, JWTPayload } from 'jose';

const JWT_SECRET_STRING = process.env.JWT_SECRET || 'harcon-precision-super-secure-jwt-secret-key-32-chars-min!';
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);

export interface TokenPayload extends JWTPayload {
  userId: string;
  email: string;
  role: string;
  name: string;
}

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16, // 64 MB
    timeCost: 3,
    parallelism: 1,
  });
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch {
    return false;
  }
}

export async function signToken(payload: Omit<TokenPayload, 'iat' | 'exp'>, expiresIn = '24h'): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  const { payload } = await jwtVerify(token, JWT_SECRET, {
    algorithms: ['HS256'],
  });
  return payload as TokenPayload;
}
