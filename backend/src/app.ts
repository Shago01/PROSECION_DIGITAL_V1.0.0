import apiRoutes from '@routes/api.routes';
import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

// * middlewares
app.use(json());

//TODO: Borrar antes de hacer build
app.use(morgan('dev'));

app.use('api/', apiRoutes);

export default app;
