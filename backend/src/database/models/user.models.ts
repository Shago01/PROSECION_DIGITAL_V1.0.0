import { NameModel } from '@database/utils/enum/nameModles';
import { ErrorMessage } from '@erros/enum/error.message';
import rol from '@utils/enum/rols.enum';
import { Sequelize, DataTypes, UUID, UUIDV4 } from 'sequelize';

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
      type: new DataTypes.ENUM(...Object.values(rol)),
      allowNull: false,
    },
  });

  return User;
};
