// products.controller.ts

import { NextFunction, Request, Response } from 'express';
import productService from '../Service/products.services';
// import { ValidationErrorItemType } from 'sequelize';
// import ProductService from '../Service/products.services';
const productData = {
  name: 'Martelo do Batima',
  price: '30 peças de ouro',
  orderId: 3,
};

const ControllerPrice = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { price } = req.body;
  
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  if (typeof price !== 'string') {
    res.status(422).json({ message: '"price" must be a string' });
    return;
  }
  if (price.length <= 2) {
    res.status(422).json({ message: '"price" length must be at least 3 characters long' });
    return;
  }
  const product = productService.createProduct(productData);
  res.status(201).json(product);
  next();
};

export default ControllerPrice;
