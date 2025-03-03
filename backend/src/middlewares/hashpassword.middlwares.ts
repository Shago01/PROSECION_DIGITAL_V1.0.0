import { hashPassword } from '@utils/hashPassword';
import validatePassword from '@utils/validatePassword';
import { NextFunction, Request, Response } from 'express';

export default function hashPasswordMiddlware(
  { body }: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { password } = body;

    validatePassword(password);
    const passwordHash = hashPassword(password);
    body.password = passwordHash;

    next();
  } catch (err) {
    return next(err);
  }
}
