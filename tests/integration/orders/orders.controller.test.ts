import { expect } from 'chai';
import sinon from 'sinon';
import { ServiceResponse } from '../../../src/types/Service.reponse';
import orderController from '../../../src/Controller/order.controller';
import orderService from '../../../src/Service/order.service';
import  orderMock from '../../mocks/order.mock';

describe('OrderController', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return all orders with associated productIds when listing orders successfully', async function () {
    const serviceResponse = {
      status: 'SUCCESSFUL',
      data: [ orderMock.orderMockOk ] as any,
    };
    sinon.stub(orderService, 'listOrders').resolves(serviceResponse);
    const req = {} as any;
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    } as any;

    await orderController.listOrders(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  });

  it('should return an error when failing to list orders', async function () {
    const serviceResponse = {
      status: 'INVALID_DATA',
      data: { message: 'Failed to fetch the orders.' },
    };
    sinon.stub(orderService, 'listOrders').resolves(serviceResponse);
    const req = {} as any;
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    } as any;

    await orderController.listOrders(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  });
});
