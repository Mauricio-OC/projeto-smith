import { Router } from 'express';
import productController from '../Controller/products.controller';
import ControllerName from '../Middlewares/middlewares';
import ControllerPrice from '../Middlewares/middleware.price';

const productRouter = Router();
productRouter.get('/', productController.listProducts);

productRouter.post(
  '/', 
  ControllerName,
  ControllerPrice,
  productController.createProduct,
);

export default productRouter;
