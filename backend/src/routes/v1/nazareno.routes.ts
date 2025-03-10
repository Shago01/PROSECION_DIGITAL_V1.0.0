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

nazarenoRoutes.get(
  '/',
  verifyRol([
    rol.ADMIN,
    rol.REGISTER,
    rol.ROOT,
    rol.SUPERVISOR,
    rol.CONSULTANT,
  ]),
  nazarenoController.getAllNazarenos,
);

export default nazarenoRoutes;
