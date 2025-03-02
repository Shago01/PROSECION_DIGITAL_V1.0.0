import userController from '@controllers/user.controller';
import hashPassword from '@middlewares/hashpassword';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/signup', hashPassword, userController.singUser);
userRoutes.post('/login', hashPassword, userController.loginUser);

export default userRoutes;
