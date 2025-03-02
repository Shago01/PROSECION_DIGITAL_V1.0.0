import { PORT } from '@config/dotenv';
import { sequelize } from '@config/sequelizeConfig';
import { setupDatabase } from '@database/setup.db';
import express from 'express';
import setupApp from './app';

const app = express();

async function starServer() {
  try {
    setupApp(app);
    await setupDatabase(sequelize);
    app.listen(PORT, err => {
      if (err) {
        console.log(
          `
    🚀 Aplicación: PROSECIÓN_DIGITAL_V1.0.0
    
    💻 Estado: ❌ Sin funcionar
    🐞 Error:
      🆔 nombre:  ${err.name}
      🆔 mensaje: ${err.message}
    `,
        );
        return;
      }

      console.log(
        `
    🚀 Aplicación: PROSECIÓN_DIGITAL_V1.0.0
    
    💻 Estado: ✅ En funcionamiento
    💼 BD: ✅ Es funcionamiento
    📚 Parametros:
      🌐 Ruta: http://localhost:${PORT}/
    `,
      );
    });
  } catch (err: any) {
    console.log(
      `
    💻 Estado: ❌ Sin funcionar
    🐞 Error:
      🆔 nombre:  ${err.name}
      🆔 mensaje: ${err.message}
    `,
    );
  }
}

starServer();

export default app;
