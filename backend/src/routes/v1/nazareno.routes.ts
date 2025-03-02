import nazarenoController from '@controllers/nazareno.controller';
import { Router } from 'express';

const nazarenoRoutes = Router();

nazarenoRoutes.post('/', nazarenoController.createNazareno);

export default nazarenoRoutes;
