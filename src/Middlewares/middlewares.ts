// products.controller.ts

import { Request, Response, NextFunction } from 'express';
// import { ValidationErrorItemType } from 'sequelize';
// import ProductService from '../Service/products.services';

const ControllerName = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export default ControllerName;
// import { NextFunction, Request, Response } from 'express';
// // import productsServices from '../Service/products.services';

// const NameValidation = (req: Request, res: Response, next: NextFunction): Response | void => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({ message: '"name" is required' });
//   }
//   if (typeof name !== 'string') {
//     return res.status(422).json({ message: '"name" must be a string' });
//   }
//   if (typeof name === 'string' && name.length <= 2) {
//     res.status(422).json({ message: '"name" length must be at least 3 characters long' });
//   }
//   next();
// };

// // const PriceValidation = (req: Request, res: Response, Next: NextFunction) => {

// // };

// export default NameValidation;
// //   PriceValidation,