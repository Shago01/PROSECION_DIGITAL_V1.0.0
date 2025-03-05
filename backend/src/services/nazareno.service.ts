import type { NazarenoRequest } from '@dto/nazareno.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import nazarenoRespository from '@repositories/nazareno.respository';

class NazarenoService {
  constructor() {}

  async createNazareno(data: NazarenoRequest) {
    if (
      await nazarenoRespository.NazarenoFindDocumenNumber(data.documentNumber)
    )
      throw new AppError(ErrorMessage.ALREADY_EXISTS, 409);
    return await nazarenoRespository.NazarenoSave(data);
  }

  async getAllNazarenoWhitPagination(limit: number, offset: number) {
    console.log(limit, offset);

    if (!limit) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
    return await nazarenoRespository.getAllNazarenosWhitCount(limit, offset);
  }
}

export default new NazarenoService();
