import { UserCreation, UserRol } from '@contracts/user';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';

export class UserRequest implements UserCreation {
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  rol!: UserRol;
  erros: any[] | undefined = undefined;

  constructor(data: UserCreation) {
    this.validateData(data), Object.assign(this, data);
    if (!this.erros) delete this.erros;
  }

  validateData(data: UserCreation) {
    const validators: Record<string, (value: any) => void> = {
      name: this.validateName,
      email: this.validateEmail,
      username: this.validateUsername,
      password: this.validatePassword,
      rol: this.validateRol,
    };

    Object.entries(validators).forEach(([key, validator]) => {
      const value = data[key as keyof UserCreation];
      if (value !== undefined) validator.call(this, value);
    });

    if (this.erros && this.erros.length != 0)
      throw new AppError(ErrorMessage.BAD_REQUEST, 400, this.erros);
  }

  validateName(name: string) {
    if (!/^[a-zA-Z\s]+$/.test(name)) this.addError(ErrorMessage.INVALID_NAME);
  }

  validateEmail(email: string) {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email))
      this.addError(ErrorMessage.INVALID_EMAIL);
  }

  validateUsername(username: string) {
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      this.addError(ErrorMessage.INVALID_USERNAME);
  }

  validatePassword(password: string) {
    if (!/^(?=.*[A-Z])(?=.*\d.*\d)[\w@?*]{8,}$/.test(password))
      this.addError(ErrorMessage.INVALID_PASSWORD);
  }
  validateRol(name: string) {
    if (['admin', 'root', 'register', 'supervisor'].includes(name))
      this.addError(ErrorMessage.INVALID_ROLE);
  }

  addError(message: string) {
    if (!this.erros) this.erros = [];
    this.erros.push({
      msg: message,
    });
  }
}
