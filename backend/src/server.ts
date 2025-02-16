import { PORT } from '@config/dotenv';
import app from './app';

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
    📚 Parametros:
      🌐 Ruta: http://localhost:${PORT}/
    `,
  );
});
