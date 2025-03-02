import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from './dotenv';

if (!(DB_HOST && DB_NAME && DB_PASS && DB_USER))
  throw new AppError(ErrorMessage.ENV_ERROR);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});

export { sequelize };
