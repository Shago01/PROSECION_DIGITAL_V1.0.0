import { PaginationData } from '@contracts/apiResponse';
import { NazarenoRequest, NazarenoResponse } from '@dto/nazareno.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import nazarenoService from '@services/nazareno.service';
import { successMessage } from '@utils/enum/succes.message';
import { calculateTotalPages, paginationParams } from '@utils/pagination';
import successResponse from '@utils/succesresponse';
import { NextFunction, Request, Response } from 'express';

class nazarenoController {
  constructor() {}

  async resetActiveAllNazareno(
    _req: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const total = await nazarenoService.resetAllActiveNazarenos();
      successResponse(res, total, successMessage.UPDATED);
    } catch (error) {
      nex(error);
    }
  }

  async updateNazarenoStatus(
    { params }: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const { code } = params;
      if (!code) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
      const dataDB = (await nazarenoService.updateNazarenoStatus(code))
        .dataValues;
      const dataResponse = new NazarenoResponse(dataDB);

      successResponse(res, dataResponse, successMessage.UPDATED);
    } catch (error) {
      nex(error);
    }
  }

  async getByDocumenNumber(
    { params }: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const { doc } = params;
      if (!doc) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
      const data = (await nazarenoService.getNazarenoByDocumenNumber(doc))
        .dataValues;
      const dataResponse = new NazarenoResponse(data);

      successResponse(res, dataResponse, successMessage.FETCHED);
    } catch (error) {
      nex(error);
    }
  }

  async getByCode({ params }: Request, res: Response, nex: NextFunction) {
    try {
      const { code } = params;
      if (!code) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
      const data = (await nazarenoService.getNazarenoBycode(code)).dataValues;
      const dataResponse = new NazarenoResponse(data);

      successResponse(res, dataResponse, successMessage.FETCHED);
    } catch (error) {
      nex(error);
    }
  }

  public async createNazareno(
    { body }: Request,
    res: Response,
    nex: NextFunction,
  ) {
    try {
      const data = new NazarenoRequest(body);
      const dataResponse = (await nazarenoService.createNazareno(data))
        .dataValues;
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
