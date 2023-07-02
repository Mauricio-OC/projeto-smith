import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import productService from '../../../src/Service/products.services';
import productController from '../../../src/Controller/products.controller';
import { ServiceResponse } from '../../../src/types/Service.reponse';
import { Product } from '../../../src/types/Product';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return the created product data when valid information is provided', async function () {
    req.body = productMock.productBody;
    const serviceResponse: ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      data: productMock.OKresponse,
    };
    sinon.stub(productService, 'createProduct').resolves(serviceResponse);

    await productController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.OKresponse);
  });
});
