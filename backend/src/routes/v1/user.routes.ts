import userController from '@controllers/user.controller';
import hashPasswordMiddlware from '@middlewares/hashpassword.middlwares';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post(
  '/newRoot',
  verifyToken,
  verifyRol([rol.ROOT]),
  hashPasswordMiddlware,
  userController.singUser,
);

userRoutes.post(
  '/newUser',
  verifyToken,
  verifyRol([rol.ADMIN, rol.ROOT]),
  hashPasswordMiddlware,
  userController.singUser,
);

userRoutes.post('/login', hashPasswordMiddlware, userController.loginUser);

export default userRoutes;
