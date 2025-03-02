import validatePassword from '@utils/validatePassword';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

export default function hashPassword(
  { body }: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { password } = body;

    validatePassword(password);
    const passwordHash = bcrypt.hashSync(password, 10);
    body.password = passwordHash;

    next();
  } catch (err) {
    return next(err);
  }
}
