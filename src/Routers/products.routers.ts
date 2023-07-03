import { Router } from 'express';
import productController from '../Controller/products.controller';
import orderController from '../Controller/order.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', orderController.listOrders);

export default productRouter;
