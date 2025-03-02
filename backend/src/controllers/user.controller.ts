import { UserRequest, UserResponse } from '@dto/user.dto';
import userService from '@services/user.service';
import successResponse from '@utils/succesresponse';
import { NextFunction, Request, Response } from 'express';

class UserController {
  constructor() {}

  async singUser({ body }: Request, res: Response, next: NextFunction) {
    try {
      const userDto = new UserRequest(body);
      const userDate = (await userService.createUser(userDto))?.dataValues;
      const resUser = new UserResponse(userDate);
      successResponse(res, resUser, 'loc');
    } catch (err) {
      return next(err);
    }
  }
}

export default new UserController();
