import { Router } from 'express';
import productController from '../Controller/products.controller';
// import ControllerName from '../Middlewares/middlewares';
// import ControllerPrice from '../Middlewares/middleware.price';
import validateProduct from '../Middlewares/middlewares';

const productRouter = Router();
productRouter.get('/', productController.listProducts);

productRouter.post('/', validateProduct, productController.createProduct);

export default productRouter;
