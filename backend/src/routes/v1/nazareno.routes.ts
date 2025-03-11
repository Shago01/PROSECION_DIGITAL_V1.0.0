import nazarenoController from '@controllers/nazareno.controller';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import { Rol } from '@utils/enum/userRols';
import { Router } from 'express';

const nazarenoRoutes = Router();

nazarenoRoutes.use(verifyToken);

nazarenoRoutes.post(
  '/',
  verifyRol([Rol.REGISTER]),
  nazarenoController.createNazareno,
);

nazarenoRoutes.get(
  '/',
  verifyRol([
    Rol.ADMIN,
    Rol.REGISTER,
    Rol.ROOT,
    Rol.SUPERVISOR,
    Rol.CONSULTANT,
  ]),
  nazarenoController.getAllNazarenos,
);

export default nazarenoRoutes;
