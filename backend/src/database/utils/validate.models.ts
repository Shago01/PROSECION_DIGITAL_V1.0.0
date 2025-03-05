import { models } from '@database/setup.db';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';

export default function validateModel(nameModel: string) {
  const Model = models[nameModel];
  if (!Model) throw new AppError(ErrorMessage.MODEL_NOT_FOUND, 500);
  return Model;
}
