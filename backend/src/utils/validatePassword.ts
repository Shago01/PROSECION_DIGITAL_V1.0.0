import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';

export default function validatePassword(password: string) {
  if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(
      password,
    )
  )
    throw new AppError(ErrorMessage.INVALID_PASSWORD, 400);
}
