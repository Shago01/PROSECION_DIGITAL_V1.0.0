import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@config/dotenv';

export function jwtResolve<T extends Object>(data: T) {
  const payload = data;
  const token = jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: '24h',
  });
  return token;
}
