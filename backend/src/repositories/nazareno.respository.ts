import { NazarenoModel } from '@contracts/nazareno';
import { NameModel } from '@database/utils/enum/nameModles';
import validateModel from '@database/utils/validate.models';
import { NazarenoRequest } from '@dto/nazareno.dto';
import { Model } from 'sequelize';

class NazarenoRepository {
  constructor() {}

  async save(modelDb: Model<any, any>) {
    return await modelDb.save();
  }

  async resetAllActiveNazarenos() {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.update(
      { active: false },
      { where: { active: true } },
    );
  }

  async getAllNazarenosWhitCount(limit: number, offset: number) {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return await Nazareno.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });
  }

  async NazarenoSave(nazareno: NazarenoRequest): Promise<NazarenoModel> {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return (await Nazareno.create(nazareno as any)) as NazarenoModel;
  }

  async NazarenoFindDocumenNumber(
    documentNumber: string,
  ): Promise<NazarenoModel | null> {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return (await Nazareno.findOne({
      where: { documentNumber },
    })) as NazarenoModel | null;
  }

  async NazarenoFindCode(code: string): Promise<NazarenoModel | null> {
    const Nazareno = validateModel(NameModel.NAZARENO);
    return (await Nazareno.findOne({
      where: { code },
    })) as NazarenoModel | null;
  }
}

export default new NazarenoRepository();
