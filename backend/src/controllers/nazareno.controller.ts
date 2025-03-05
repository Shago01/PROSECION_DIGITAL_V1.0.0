import { PaginationData } from '@contracts/apiResponse';
import { NazarenoRequest, NazarenoResponse } from '@dto/nazareno.dto';
import nazarenoService from '@services/nazareno.service';
import { successMessage } from '@utils/enum/succes.message';
import { calculateTotalPages, paginationParams } from '@utils/pagination';
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

  public async getAllNazarenos(
    { query }: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const { page, limit, offset } = paginationParams(query);
      const { rows, count } =
        await nazarenoService.getAllNazarenoWhitPagination(limit, offset);

      const nazarenosRes = rows.map(
        nazareno => new NazarenoResponse(nazareno.dataValues),
      );

      const DataResponse: PaginationData<NazarenoResponse[]> = {
        cotent: nazarenosRes,
        total: count,
        limit,
        page,
        totalPages: calculateTotalPages(count, limit),
      };

      successResponse(res, DataResponse, successMessage.FETCHED_ALL);
    } catch (error) {
      nex(error);
    }
  }
}

export default new nazarenoController();
