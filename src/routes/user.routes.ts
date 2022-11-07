import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateUserFields } from '../middlewares/validateFields';

const router = Router();

const userController = new UserController();

router.post('/', validateUserFields, userController.create);

export default router;