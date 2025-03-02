import { models } from '@database/setup.db';
import { UserRequest } from '@dto/user.dto';

class UserRepository {
  constructor() {}

  async saveUser(user: UserRequest) {
    const { User } = models;
    return await User?.create(user as any);
  }

  async getUserByUserName(username: string) {
    const { User } = models;
    return await User?.findOne({ where: { username } });
  }
}

export default new UserRepository();
