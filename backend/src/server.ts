import { PORT } from '@config/dotenv';
import express from 'express';
import setupApp from './app';
import sequelize from '@config/sequelizeConfig';

const app = express();
setupApp(app);

async function starServer() {
  try {
    //TODO: Cambiar por autenticación
    await sequelize.sync({ force: true });
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
