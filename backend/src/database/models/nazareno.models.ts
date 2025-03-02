import { ErrorMessage } from '@erros/enum/error.message';
import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  sequelize.define('Nazareno', {
    code: {
      type: DataTypes.STRING(),
      primaryKey: true,
      allowNull: false,
    },
    documentType: {
      type: DataTypes.ENUM('CC', 'CE', 'TI'),
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false,
    },
    documentNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isDateFormat(value: string) {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            throw new Error(ErrorMessage.INVALID_DATE_FORMAT);
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: {
          args: [0, 10],
          msg: ErrorMessage.INVALID_PHONE_NUMBER,
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    yearsActive: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });
};
