import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/Service/products.services';

describe('ProductsService', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return the created product data when valid information is provided', async function () {
    const parameters = productMock.productBody;
    const mockCreateReturn = ProductModel.build(productMock.OKresponse);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const serviceResponse = await productService.createProduct(parameters);

    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(productMock.OKresponse);
  });

  it('should return an error response when failed to create a product', async function () {
    const parameters = productMock.productBody;
    const errorMessage = 'Failed to create the product.';
    sinon.stub(ProductModel, 'create').rejects(new Error(errorMessage));

    const serviceResponse = await productService.createProduct(parameters);

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal({ message: errorMessage });
  });

  it('should return all products when listing products successfully', async function () {
    const mockFindAllReturn = [
      ProductModel.build(productMock.OKresponse),
      ProductModel.build(productMock.OKresponse),
    ];
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);

    const serviceResponse = await productService.listProducts();

    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal([
      productMock.OKresponse,
      productMock.OKresponse,
    ]);
  });

  it('should return an error response when failed to fetch products', async function () {
    const errorMessage = 'Failed to fetch the products.';
    sinon.stub(ProductModel, 'findAll').rejects(new Error(errorMessage));

    const serviceResponse = await productService.listProducts();

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal({ message: errorMessage });
  });
});
