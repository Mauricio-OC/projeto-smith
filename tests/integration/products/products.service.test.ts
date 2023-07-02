import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/Service/products.services';
// import { ServiceResponse, ServiceResponseErrorType } from '../../../src/types/Service.reponse';

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
});
