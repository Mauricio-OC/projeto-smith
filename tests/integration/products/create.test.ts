import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return the created product data when valid information is provided', async function () {
    const httpRequestBody = productMock.productBody;
    const mockCreateReturn = ProductModel.build(productMock.OKresponse);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const reponseHTTP = await chai.request(app).post('/products').send(httpRequestBody);

    expect(reponseHTTP.status).to.equal(201);
    expect(reponseHTTP.body).to.deep.equal(productMock.OKresponse);
  });
});
