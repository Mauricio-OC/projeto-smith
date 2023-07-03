import { Router } from 'express';
import productController from '../Controller/products.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.listProducts);

export default productRouter;
