import { NODE_ENV } from '@config/dotenv';
import errorHandler from '@middlewares/errorHandler';
import apiRoutes from '@routes/api.routes';
import cors from 'cors';
import { Express, json } from 'express';
import morgan from 'morgan';

export default (app: Express) => {
  app.use(cors());
  app.use(json());

  if (NODE_ENV?.match('dev')) app.use(morgan('dev'));

  // * rutas de la api
  app.use('/api', apiRoutes);

  // * midlleware de manejo de erorres
  app.use(errorHandler);
};
