import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateProductFields } from '../middlewares/validateFields';

const router = Router();

const productController = new ProductController();

router.post('/', validateProductFields, productController.create);
router.get('/', productController.getAll);

export default router;