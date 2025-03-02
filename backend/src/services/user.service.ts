import { UserRequest } from '@dto/user.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import userRespository from '@repositories/user.respository';

class UserService {
  constructor() {}

  async createUser(user: UserRequest) {
    if (await userRespository.getUserByUserName(user.username))
      throw new AppError(ErrorMessage.ALREADY_EXISTS, 409);

    return await userRespository.saveUser(user);
  }
}

export default new UserService();
