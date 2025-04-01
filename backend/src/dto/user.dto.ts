import {
  UserCreation,
  UserLogin,
  UserResponseI,
  UserRol,
} from '@contracts/user';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import { Rol } from '@utils/enum/userRols';
import { UUID } from 'crypto';

export class UserRequest implements UserCreation {
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  rol!: UserRol;
  errors?: any[] = [];

  constructor(data: UserCreation) {
    this.validateData(data);
    Object.assign(this, data);

    delete this.errors;
  }

  validateData(data: UserCreation) {
    const validators: Record<string, (value: any) => void> = {
      name: this.validateName,
      email: this.validateEmail,
      username: this.validateUsername,
      rol: this.validateRol,
    };

    Object.entries(validators).forEach(([key, validator]) => {
      const value = data[key as keyof UserCreation];
      if (value !== undefined) validator.call(this, value);
    });

    if (this.errors && this.errors.length > 0)
      throw new AppError(ErrorMessage.BAD_REQUEST, 400, this.errors);
  }

  validateName(name: string) {
    if (!/^[a-zA-Z\s]+$/.test(name)) this.addError(ErrorMessage.INVALID_NAME);
  }

  validateEmail(email: string) {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
      this.addError(ErrorMessage.INVALID_EMAIL);
    }
  }

  validateUsername(username: string) {
    if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
      this.addError(ErrorMessage.INVALID_USERNAME);
    }
  }

  validateRol(rolUserReq: string) {
    if (!Object.values(Rol).includes(rolUserReq as Rol)) {
      this.addError(ErrorMessage.INVALID_ROLE);
    }
  }

  addError(message: string) {
    if (!this.errors) this.errors = [];
    this.errors.push({ msg: message });
  }
}

export class UserResponse implements UserResponseI {
  id!: UUID;
  name!: string;
  email!: string;
  username!: string;
  rol!: UserRol;

  constructor({ email, id, name, rol, username }: UserResponse) {
    this.email = email;
    this.id = id;
    this.name = name;
    this.rol = rol;
    this.username = username;
  }
}

export class LoginUser implements UserLogin {
  username: string;
  password: string;

  constructor({ password, username }: UserLogin) {
    this.username = username;
    this.password = password;
  }
}
