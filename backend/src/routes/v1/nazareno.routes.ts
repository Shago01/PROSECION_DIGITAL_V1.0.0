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

nazarenoRoutes.use(
  verifyRol([
    Rol.ADMIN,
    Rol.REGISTER,
    Rol.ROOT,
    Rol.SUPERVISOR,
    Rol.CONSULTANT,
  ]),
);

nazarenoRoutes.get('/query', nazarenoController.getAllNazarenos);
nazarenoRoutes.get('/by-code/:code', nazarenoController.getByCode);
nazarenoRoutes.get('/by-doc/:doc', nazarenoController.getByDocumenNumber);

export default nazarenoRoutes;
