import apiRoutes from '@routes/api.routes';
import { Express, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default (app: Express) => {
  app.use(cors({}));
  app.use(json());
  //TODO: Borrar antes de hacer build
  app.use(morgan('dev'));

  // * rutas de la api
  app.use('api/', apiRoutes);
};
