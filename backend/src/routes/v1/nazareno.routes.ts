import nazarenoController from '@controllers/nazareno.controller';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import { Rol } from '@utils/enum/userRols';
import { Router } from 'express';

const nazarenoRoutes = Router();

nazarenoRoutes.use(verifyToken);

nazarenoRoutes.put(
  '/reset',
  verifyRol([Rol.ADMIN, Rol.ROOT]),
  nazarenoController.resetActiveAllNazareno,
);

nazarenoRoutes.get(
  '/analytics',
  verifyRol([Rol.ADMIN, Rol.ROOT]),
  nazarenoController.getBasicAnalitics,
);

nazarenoRoutes.post(
  '/',
  verifyRol([Rol.REGISTER]),
  nazarenoController.createNazareno,
);

nazarenoRoutes.patch(
  '/active/:code',
  verifyRol([Rol.REGISTER]),
  nazarenoController.updateNazarenoStatus,
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
