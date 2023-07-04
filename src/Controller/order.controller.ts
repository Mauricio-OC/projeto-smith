import { Request, Response } from 'express';
import orderService from '../Service/order.service';

async function listOrders(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await orderService.listOrders();
  return res.status(200).json(serviceResponse.data);
}

export default {
  listOrders,
};
