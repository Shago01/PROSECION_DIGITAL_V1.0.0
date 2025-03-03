import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import { NextFunction, Request, Response } from 'express';

export function verifyRol(rols: string[]) {
  return (req: Request, _res: Response, nex: NextFunction) => {
    const { rol: userRol } = req.body.payload;
    if (!userRol || !rols.includes(userRol))
      throw new AppError(ErrorMessage.UNAUTHORIZED_ACCESS, 401);
    nex();
  };
}
