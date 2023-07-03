import { Router } from 'express';
import orderController from '../Controller/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderController.listOrders);

export default orderRouter;