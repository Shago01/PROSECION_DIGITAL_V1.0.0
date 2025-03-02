import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import { NextFunction, Request, Response } from 'express';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.log(`
    ❌ Error: 
      🧾 msg : ${err.message} 
    `);

  if (err instanceof AppError) {
    res.status(err.status).json({
      err: {
        msg: err.message,
        details: err.details,
      },
    });
  } else {
    res.status(500).json({
      err: {
        msg: ErrorMessage.SERVER_ERROR,
        details: null,
      },
    });
  }
}
