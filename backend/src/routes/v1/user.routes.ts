import userController from '@controllers/user.controller';
import hashPasswordMiddlware from '@middlewares/hashpassword.middlwares';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import rol from '@utils/enum/rols.enum';
import { Router } from 'express';

const userRoutes = Router();

// * ruta para el login de usuarios
userRoutes.post('/login', hashPasswordMiddlware, userController.loginUser);

userRoutes.use(verifyToken);

// * rutas accesibles solo para el rol ROOT
userRoutes.use(verifyRol([rol.ROOT]));
userRoutes.post('/newRoot', userController.singUser);

// * rutas accesibles para los roles ROOT y ADMIN
userRoutes.use(verifyRol([rol.ROOT, rol.ADMIN]));
userRoutes.post('/newUser', userController.singUser);
userRoutes.delete('/deleteUser/:id', userController.deleteUser);

export default userRoutes;
