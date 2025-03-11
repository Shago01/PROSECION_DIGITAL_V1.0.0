import { rol } from '@contracts/user';
import nazarenoController from '@controllers/nazareno.controller';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
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
