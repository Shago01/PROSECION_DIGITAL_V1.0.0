import type { NazarenoRequest } from '@dto/nazareno.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import nazarenoRespository from '@repositories/nazareno.respository';

class NazarenoService {
  constructor() {}

  async getNazarenoByDocumenNumber(documentNumber: string) {
    const nazDb = await nazarenoRespository.NazarenoFindDocumenNumber(
      documentNumber,
    );
    if (!nazDb) throw new AppError(ErrorMessage.NOT_FOUND);
    return nazDb;
  }

  async getNazarenoBycode(code: string) {
    const nazDb = await nazarenoRespository.NazarenoFindCode(code);
    if (!nazDb) throw new AppError(ErrorMessage.NOT_FOUND);
    return nazDb;
  }

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
