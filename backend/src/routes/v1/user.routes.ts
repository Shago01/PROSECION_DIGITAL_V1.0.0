import userController from '@controllers/user.controller';
import hashPassword from '@middlewares/hashpassword';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/signup', hashPassword, userController.singUser);

export default userRoutes;
