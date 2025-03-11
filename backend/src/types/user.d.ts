import { UUID } from 'crypto';

enum rol {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  REGISTER = 'register',
  ROOT = 'root',
  CONSULTANT = 'consultant',
}

type UserRol = `${rol}`;

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

type UserResponse = Omit<User, 'password'>;

export {
  Token,
  User,
  UserCreation,
  UserLogin,
  UserPyloadJWT,
  UserResponse,
  UserRol,
  rol,
};
