import { JWT_SECRET } from '@config/dotenv';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const token: string = extractToken(req);
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.payload = decoded;
    next();
  } catch (err) {
    throw new AppError(ErrorMessage.AUTHENTICATION_FAILED, 401);
  }
}

function extractToken(req: Request): string {
  const authHeader = req.header('Authorization') || '';
  if (!authHeader.startsWith('Bearer '))
    throw new AppError(ErrorMessage.AUTHENTICATION_FAILED, 401);
  const token = authHeader.split(' ')[1];
  return token ? token : '';
}
