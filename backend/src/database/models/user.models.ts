import { ErrorMessage } from '@erros/enum/error.message';
import { Sequelize, DataTypes, UUID } from 'sequelize';

export default (sequelize: Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: UUID,
      defaultValue: UUID,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: ErrorMessage.INVALID_EMAIL,
        },
      },
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isValidatePassword(value: string) {
          if (!/^(?=.*[A-Z])(?=.*\d.*\d)[\w@?*]{8,}$/.test(value)) {
            throw new Error(ErrorMessage.INVALID_PASSWORD);
          }
        },
      },
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    rol: {
      type: new DataTypes.ENUM('admin', 'root', 'register', 'supervisor'),
      allowNull: false,
    },
  });

  return User;
};
