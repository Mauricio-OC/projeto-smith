import { NextFunction, Request, Response } from 'express';

type ValidationResponse = {
  statusCode: number;
  message: string;
};

function isParamRequired(paramName: string, paramValue: string): ValidationResponse | undefined {
  if (!paramValue) {
    return {
      statusCode: 400,
      message: `"${paramName}" is required`,
    };
  }
}

function isParamString(paramName: string, paramValue: string): ValidationResponse | undefined {
  if (typeof paramValue !== 'string') {
    return {
      statusCode: 422,
      message: `"${paramName}" must be a string`,
    };
  }
}

function isParamLengthValid(paramName: string, paramValue: string): ValidationResponse | undefined {
  if (paramValue.length < 3) {
    return {
      statusCode: 422,
      message: `"${paramName}" length must be at least 3 characters long`,
    };
  }
}

function validateParams(param: object): ValidationResponse | void {
  const paramName = Object.keys(param)[0];
  const paramValue = Object.values(param)[0];

  const requiredValidation = isParamRequired(paramName, paramValue);
  if (requiredValidation) {
    return requiredValidation;
  }

  const stringValidation = isParamString(paramName, paramValue);
  if (stringValidation) {
    return stringValidation;
  }

  const lengthValidation = isParamLengthValid(paramName, paramValue);
  if (lengthValidation) {
    return lengthValidation;
  }
}

function validateProduct(req: Request, res: Response, next: NextFunction): Response | void {
  const { name, price } = req.body;
  const nameValidation = validateParams({ name });
  const priceValidation = validateParams({ price });

  if (nameValidation) {
    return res.status(nameValidation.statusCode).json({ message: nameValidation.message });
  }

  if (priceValidation) {
    return res.status(priceValidation.statusCode).json({ message: priceValidation.message });
  }

  next();
}

export default validateProduct;
