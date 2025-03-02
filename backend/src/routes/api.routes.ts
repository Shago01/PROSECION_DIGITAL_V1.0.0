import { Router } from 'express';
import nazarenoRoutes from './v1/nazareno.routes';
import userRoutes from './v1/user.routes';

const apiRoutes = Router();

// * todas las rutas

apiRoutes.use('/nazareno', nazarenoRoutes);
apiRoutes.use('/user', userRoutes);

// ? midllweares - generales de todas las rutas

export default apiRoutes;
