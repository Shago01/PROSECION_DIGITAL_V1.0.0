import { Rol } from '@utils/enum/userRols';
import { UUID } from 'crypto';

type UserRol = `${Rol}`;

type Token = string;

interface User {
  id: UUID;
  name: string;
  email: string;
  username: string;
  password: string;
  rol: UserRol;
}

type UserCreation = Omit<User, 'id'>;

type UserLogin = Pick<User, 'username' | 'password'>;

type UserPyloadJWT = Pick<User, 'id' | 'username' | 'rol'>;

type UserResponseI = Omit<User, 'password' | 'username'>;

export {
  Token,
  User,
  UserCreation,
  UserLogin,
  UserPyloadJWT,
  UserResponseI,
  UserRol,
};
