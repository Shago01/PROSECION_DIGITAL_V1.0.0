import type { ResAuth } from '@contracts/resAuth';
import type { Token } from '@contracts/user';
import { LoginUser, UserRequest, UserResponse } from '@dto/user.dto';
import userService from '@services/user.service';
import { successMessage } from '@utils/enum/succes.message';
import successResponse from '@utils/succesresponse';
import { NextFunction, Request, Response } from 'express';

class UserController {
  constructor() {}

  async singUser({ body }: Request, res: Response, next: NextFunction) {
    try {
      const rolreq = body.payload.rol;
      const userDto = new UserRequest(body);
      const userData = (await userService.createUser(userDto, rolreq))
        ?.dataValues;
      const resUser = new UserResponse(userData);
      successResponse(res, resUser, successMessage.CREATED);
    } catch (err) {
      next(err);
    }
  }

  async loginUser({ body }: Request, res: Response, next: NextFunction) {
    try {
      const userDto = new LoginUser(body);
      const token: Token = await userService.login(userDto);
      const auth: ResAuth = {
        auth: {
          token,
        },
      };
      successResponse(res, auth, successMessage.LOGIN);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(
    { params, body }: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = params;
      const { rol } = body.payload;
      await userService.deleteUser(id, rol);

      successResponse(res, {}, successMessage.DELETED);
    } catch (err) {
      next(err);
    }
  }

  async getAllUsers(
    {query}: Request,
    res: Response,
    next: NextFunction
  ){
    try{

    }catch(err){
      
    }
  }
}

export default new UserController();
