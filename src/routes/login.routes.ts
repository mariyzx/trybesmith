import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateFields from '../middlewares/validateFields';

const router = Router();

const userController = new UserController();

router.post('/', validateFields, userController.login);

export default router;