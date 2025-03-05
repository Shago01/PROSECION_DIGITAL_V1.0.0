import nazarenoController from '@controllers/nazareno.controller';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const nazarenoRoutes = Router();

nazarenoRoutes.use(verifyToken);

nazarenoRoutes.post(
  '/',
  verifyRol([rol.REGISTER]),
  nazarenoController.createNazareno,
);

// TODO: Añadir el rol Consultor cuando se tenga
nazarenoRoutes.get(
  '/',
  verifyRol([rol.REGISTER]),
  nazarenoController.getAllNazarenos,
);

export default nazarenoRoutes;
