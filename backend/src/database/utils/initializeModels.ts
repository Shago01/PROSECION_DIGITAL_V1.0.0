import loadDynamicModules from '@utils/loadFiles';
import { Sequelize } from 'sequelize';

export default async function initializeModels(sequelize: Sequelize) {
  try {
    await loadDynamicModules('./database/models', sequelize);

    const {} = sequelize.models;
    console.log(sequelize.models);
    console.log(`
      ✅ Conectado a la base de datos
      ✅ Modelos cargados a sequelize
      ✅ Relaciones anexadas a los modelos
      `);
  } catch (err: any) {
    console.log(`
      ❌ Error:
        🧾 MSG: ${err.message} 
      `);
  }
  return sequelize.models;
}
