import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authValidation from '../middlewares/authValidation';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', authValidation, orderController.create);

export default router;