import { UserPyloadJWT } from '@contracts/user';
import { LoginUser, UserRequest } from '@dto/user.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import userRespository from '@repositories/user.respository';
import { jwtResolve } from '@utils/jwtresolve';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {}

  async createUser(user: UserRequest) {
    if (await userRespository.getUserByUserName(user.username))
      throw new AppError(ErrorMessage.ALREADY_EXISTS, 409);
    return await userRespository.saveUser(user);
  }

  async login({ username, password }: LoginUser) {
    const user = (await userRespository.getUserByUserName(username))
      ?.dataValues;

    if (!user) throw new AppError(ErrorMessage.NOT_FOUND, 404);
    if (await bcrypt.compare(password, user.password))
      throw new AppError(ErrorMessage.INVALID_PASSWORD, 401);

    const payload = {
      id: user.id,
      username: user.username,
      rol: user.rol,
    };

    return jwtResolve<UserPyloadJWT>(payload);
  }
}

export default new UserService();
