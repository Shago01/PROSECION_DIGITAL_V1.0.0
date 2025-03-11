import userController from '@controllers/user.controller';
import hashPasswordMiddlware from '@middlewares/hashpassword.middlwares';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const userRoutes = Router();

// * ruta para el login de usuarios
userRoutes.post('/login', userController.loginUser);

userRoutes.use(verifyToken);

// * rutas accesibles solo para el rol ROOT
userRoutes.post(
  '/newRoot',
  verifyRol([rol.ROOT]),
  hashPasswordMiddlware,
  userController.singUser,
);

// * rutas accesibles para los roles ROOT y ADMIN
userRoutes.post(
  '/newUser',
  verifyRol([rol.ROOT, rol.ADMIN]),
  hashPasswordMiddlware,
  userController.singUser,
);
userRoutes.delete(
  '/:id',
  verifyRol([rol.ROOT, rol.ADMIN]),
  userController.deleteUser,
);

userRoutes.get(
  "/",
  verifyRol([rol.ROOT, rol.ADMIN, rol.SUPERVISOR]),
  userController.getAllUsers,
)

export default userRoutes;
