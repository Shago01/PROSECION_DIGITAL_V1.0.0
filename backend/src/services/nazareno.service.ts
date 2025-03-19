import type { NazarenoRequest } from '@dto/nazareno.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import nazarenoRespository from '@repositories/nazareno.respository';
import { defineWorkBookExcel } from '@utils/defineWorkBookExcel';

class NazarenoService {
  constructor() {}

  async getJsonToExcelData() {
    const data = await nazarenoRespository.getAll();
    return defineWorkBookExcel(data);
  }

  async getBasicAnalitics() {
    const stats = await nazarenoRespository.getBasicAnalitics();
    if (!stats) throw new AppError(ErrorMessage.SERVER_ERROR);
    return stats;
  }

  async resetAllActiveNazarenos() {
    return await nazarenoRespository.resetAllActiveNazarenos();
  }

  async updateNazarenoStatus(code: string) {
    const nazDb = await nazarenoRespository.NazarenoFindCode(code);

    if (!nazDb) throw new AppError(ErrorMessage.NOT_FOUND, 404);
    if (nazDb.active) throw new AppError(ErrorMessage.NAZARENOS_IS_ACTIVE, 409);

    nazDb.active = true;
    nazDb.yearsActive += 1;

    return nazarenoRespository.save(nazDb);
  }

  async getNazarenoByDocumenNumber(documentNumber: string) {
    const nazDb = await nazarenoRespository.NazarenoFindDocumenNumber(
      documentNumber,
    );
    if (!nazDb) throw new AppError(ErrorMessage.NOT_FOUND, 404);
    return nazDb;
  }

  async getNazarenoBycode(code: string) {
    const nazDb = await nazarenoRespository.NazarenoFindCode(code);
    if (!nazDb) throw new AppError(ErrorMessage.NOT_FOUND, 404);
    return nazDb;
  }

  async createNazareno(data: NazarenoRequest) {
    const nazdb = await nazarenoRespository.NazarenoFindDocumenNumber(
      data.documentNumber,
    );
    if (nazdb) throw new AppError(ErrorMessage.ALREADY_EXISTS, 409);
    return await nazarenoRespository.NazarenoSave(data);
  }

  async getAllNazarenoWhitPagination(limit: number, offset: number) {
    if (!limit) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
    return await nazarenoRespository.getAllNazarenosWhitCount(limit, offset);
  }
}

export default new NazarenoService();
