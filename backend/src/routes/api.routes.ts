import { Router } from 'express';
import nazarenoRoutes from './v1/nazareno.routes';

const apiRoutes = Router();

// * todas las rutas

apiRoutes.use('/nazareno', nazarenoRoutes);

// ? midllweares - generales de todas las rutas

export default apiRoutes;
