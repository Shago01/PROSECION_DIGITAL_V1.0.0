import { Model, ModelStatic, Sequelize } from 'sequelize';
import initializeModels from './utils/initializeModels';

let models: { [key: string]: ModelStatic<Model<any, any>> } = {};

export async function setupDatabase(sequelize: Sequelize) {
  models = await initializeModels(sequelize);
}

export { models };
