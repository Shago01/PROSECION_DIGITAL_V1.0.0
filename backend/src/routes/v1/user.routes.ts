import userController from '@controllers/user.controller';
import hashPassword from '@middlewares/hashpassword';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post(
  '/newRoot',
  verifyToken,
  verifyRol([rol.ROOT]),
  hashPassword,
  userController.singUser,
);

userRoutes.post(
  '/newUser',
  verifyToken,
  verifyRol([rol.ADMIN, rol.ROOT]),
  hashPassword,
  userController.singUser,
);

userRoutes.post('/login', hashPassword, userController.loginUser);

export default userRoutes;
