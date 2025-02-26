import { NextFunction, Request, Response } from 'express';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';

export default function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  _next: NextFunction,
) {
  console.log(`
    ❌ Error: 
      🧾 msg : ${err.message} 
    `);

  if (err instanceof AppError)
    return res.status(err.status).json({
      err: {
        msg: err.message,
      },
    });

  return res.status(500).json({
    err: {
      msg: ErrorMessage.SERVER_ERROR,
    },
  });
}
