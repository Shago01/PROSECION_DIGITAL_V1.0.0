import { UserPyloadJWT, UserRol } from '@contracts/user';
import { LoginUser, UserRequest } from '@dto/user.dto';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import userRespository from '@repositories/user.respository';
import { Rol } from '@utils/enum/userRols';
import { jwtResolve } from '@utils/jwtresolve';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {}

  async createUser(user: UserRequest, rolreq: string) {
    if (user.rol === Rol.ROOT && rolreq !== Rol.ROOT)
      throw new AppError(ErrorMessage.FORBIDDEN, 403);

    if (await userRespository.getUserByUserName(user.username))
      throw new AppError(ErrorMessage.ALREADY_EXISTS, 409);

    return await userRespository.saveUser(user);
  }

  async login({ username, password }: LoginUser) {
    const user = (await userRespository.getUserByUserName(username))
      ?.dataValues;

    if (!user) throw new AppError(ErrorMessage.INVALID_LOGIN, 404);
    if (!(await bcrypt.compare(password, user.password)))
      throw new AppError(ErrorMessage.INVALID_LOGIN, 401);

    const payload = {
      id: user.id,
      username: user.username,
      rol: user.rol,
    };

    return jwtResolve<UserPyloadJWT>(payload);
  }

  async deleteUser(idUser?: string, rolReq?: UserRol) {
    if (!idUser || !rolReq) throw new AppError(ErrorMessage.BAD_REQUEST, 400);
    const user = (await userRespository.getUserById(idUser))?.dataValues;

    // * verificaccion que el usuario exista
    if (!user) throw new AppError(ErrorMessage.NOT_FOUND, 404);

    // * verificacion basada en roles
    if (user.rol === Rol.ROOT) await this.validateDeleteRootUser(rolReq);
    if (user.rol === Rol.ADMIN) this.validateDeleteAdminUser(rolReq);

    return await userRespository.dropUser(idUser);
  }

  private async validateDeleteRootUser(rolReq: UserRol) {
    if (rolReq !== Rol.ROOT) throw new AppError(ErrorMessage.FORBIDDEN, 403);
    if ((await userRespository.countUserByRol(Rol.ROOT)) === 1)
      throw new AppError(ErrorMessage.LAST_ROOT, 403);
  }

  private validateDeleteAdminUser(rolReq: UserRol) {
    if (![Rol.ADMIN, Rol.ROOT].includes(rolReq as Rol))
      throw new AppError(ErrorMessage.FORBIDDEN, 403);
  }

  async getAllUsersWhitPagination(limit: number, offset: number) {
    return await userRespository.getAllUsersWhitPagination(limit, offset);
  }
}

export default new UserService();
