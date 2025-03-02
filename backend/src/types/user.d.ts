import { UUID } from 'crypto';

type UserRol = 'admin' | 'root' | 'register' | 'supervisor';

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
};
