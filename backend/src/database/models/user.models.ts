import { NameModel } from '@database/utils/enum/nameModles';
import { ErrorMessage } from '@erros/enum/error.message';
import { Rol } from '@utils/enum/userRols';
import { DataTypes, Sequelize, UUID, UUIDV4 } from 'sequelize';

export default (sequelize: Sequelize) => {
  const User = sequelize.define(NameModel.USER, {
    id: {
      type: UUID,
      defaultValue: new UUIDV4(),
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
      validate: {
        isEmail: {
          msg: ErrorMessage.INVALID_EMAIL,
        },
      },
    },
    password: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    rol: {
      type: new DataTypes.ENUM(...Object.values(Rol)),
      allowNull: false,
    },
  });

  return User;
};
