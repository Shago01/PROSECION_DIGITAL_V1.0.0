import { NameModel } from '@database/utils/enum/nameModles';
import validateModel from '@database/utils/validate.models';
import { NazarenoRequest } from '@dto/nazareno.dto';

class NazarenoRepository {
  constructor() {}

  async getAllNazarenosWhitCount(limit: number, offset: number) {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });
  }

  async NazarenoSave(nazareno: NazarenoRequest) {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.create(nazareno as any);
  }

  async NazarenoFindDocumenNumber(documentNumber: string) {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.findOne({ where: { documentNumber } });
  }

  async NazarenoFindCode(code: string) {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.findOne({ where: { code } });
  }
}

export default new NazarenoRepository();
