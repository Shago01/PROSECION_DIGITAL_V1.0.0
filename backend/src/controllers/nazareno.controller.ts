import { NazarenoRequest, NazarenoResponse } from '@dto/nazareno.dto';
import nazarenoService from '@services/nazareno.service';
import { successMessage } from '@utils/enum/succes.message';
import successResponse from '@utils/succesresponse';
import { NextFunction, Request, Response } from 'express';

class nazarenoController {
  constructor() {}

  public async createNazareno(
    { body }: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const data = new NazarenoRequest(body);
      const dataResponse = (await nazarenoService.createNazareno(data))
        ?.dataValues;
      const response = new NazarenoResponse(dataResponse);
      successResponse(res, response, successMessage.CREATED);
    } catch (error) {
      nex(error);
    }
  }
}

export default new nazarenoController();
