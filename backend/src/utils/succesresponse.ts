import { ApiResponse } from '@contracts/apiResponse';
import { Response } from 'express';

export default function successResponse<T>(
  res: Response,
  data: T,
  message: string,
) {
  const dataResponse: ApiResponse<T> = {
    suscces: true,
    data,
    message,
  };

  res.status(200).json(dataResponse);
}
