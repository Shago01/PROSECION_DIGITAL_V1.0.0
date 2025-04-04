import userController from '@controllers/user.controller';
import hashPasswordMiddlware from '@middlewares/hashpassword.middlwares';
import { verifyRol } from '@middlewares/verifyRol';
import verifyToken from '@middlewares/verifyToken';
import { Rol } from '@utils/enum/userRols';
import { Router } from 'express';

const userRoutes = Router();

// * ruta para el login de usuarios
userRoutes.post('/login', userController.loginUser);

userRoutes.use(verifyToken, verifyRol([Rol.ROOT, Rol.ADMIN]));

// * rutas accesibles para los roles ROOT y ADMIN
userRoutes.post('/newUser', hashPasswordMiddlware, userController.singUser);

userRoutes.delete('/:id', userController.deleteUser);

userRoutes.get('/query', userController.getAllUsers);

export default userRoutes;
