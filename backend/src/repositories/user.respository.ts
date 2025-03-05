import { NameModel } from '@database/utils/enum/nameModles';
import validateModel from '@database/utils/validate.models';
import { UserRequest } from '@dto/user.dto';

class UserRepository {
  constructor() {}

  async saveUser(user: UserRequest) {
    const User = validateModel(NameModel.USER);
    return await User.create(user as any);
  }

  async getUserByUserName(username: string) {
    const User = validateModel(NameModel.USER);
    return await User.findOne({ where: { username } });
  }

  async getUserById(id: string) {
    const User = validateModel(NameModel.USER);
    return await User.findByPk(id);
  }

  async dropUser(id: string) {
    const User = validateModel(NameModel.USER);
    return await User.destroy({ where: { id } });
  }

  async countUserByRol(rol: string) {
    const User = validateModel(NameModel.USER);
    return await User.count({ where: { rol } });
  }
}

export default new UserRepository();
