import nazarenoController from '@controllers/nazareno.controller';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const nazarenoRoutes = Router();

nazarenoRoutes.post(
  '/',
  verifyToken,
  verifyRol([rol.REGISTER]),
  nazarenoController.createNazareno,
);

export default nazarenoRoutes;
