import { Request, Response } from 'express';
import productService from '../Service/products.services';
import HTTPStatus from '../Middlewares/HTTPStatus';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.createProduct({
    name,
    price,
    orderId,
    id: 0,
  });
  if (serviceResponse.status !== 'SUCCESSFUL') {
    const statusCode = HTTPStatus(serviceResponse.status);
    return res.status(statusCode).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
}

export default {
  createProduct,
};
