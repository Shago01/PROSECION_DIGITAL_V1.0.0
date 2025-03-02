import { Model, ModelStatic, Sequelize } from 'sequelize';
import initializeModels from './utils/initializeModels';

let models: { [key: string]: ModelStatic<Model<any, any>> } = {};

const setupDatabase = async (sequelize: Sequelize) => {
  models = await initializeModels(sequelize);
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
  console.log(`
      ✅ Conectado a la base de datos
      ✅ Modelos cargados a sequelize
      ✅ Relaciones anexadas a los modelos
      `);
};

export { models, setupDatabase };
