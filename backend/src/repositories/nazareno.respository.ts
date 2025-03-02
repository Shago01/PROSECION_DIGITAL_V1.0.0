import { models } from '@database/setup.db';
import NazarenoRequest from '@dto/nazareno.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';

class NazarenoRepository {
  constructor() {}

  async NazarenoSave(nazareno: NazarenoRequest) {
    const { Nazareno } = models;
    if (!nazareno) throw new AppError(ErrorMessage.SERVER_ERROR, 500);
    return await Nazareno?.create(nazareno as any);
  }

  async NazarenoFindDocumenNumber(documentNumber: string) {
    const { Nazareno } = models;
    return await Nazareno?.findOne({ where: { documentNumber } });
  }
}

export default new NazarenoRepository();
