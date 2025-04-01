import loadDynamicModules from '@utils/loadFiles';
import { Sequelize } from 'sequelize';

export default async function initializeModels(sequelize: Sequelize) {
  try {
    await loadDynamicModules('./database/models', sequelize);

    const {} = sequelize.models;
    console.log('Estos son los modelos existentes:  \n', sequelize.models);
  } catch (err: any) {
    console.log(`
      ❌ Error:
        🧾 MSG: ${err.message} 
      `);
  }
  return sequelize.models;
}
