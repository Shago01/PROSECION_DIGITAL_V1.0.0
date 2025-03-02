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
      const userDto = new UserRequest(body);
      const userData = (await userService.createUser(userDto))?.dataValues;
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
}

export default new UserController();
