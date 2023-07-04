import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { ServiceResponse } from '../../../src/types/Service.reponse';
import { OrderSequelizeModel } from '../../../src/database/models/order.model';
import  orderMockOk  from '../../mocks/order.mock';
import orderService from '../../../src/Service/order.service';
import orderController from '../../../src/Controller/order.controller';
import { Order } from '../../../src/types/Order';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('GET /orders', function () {
    it('should return orders list', async function () {
      const serviceResponse: ServiceResponse<OrderSequelizeModel[]> = {
        status: 'SUCCESSFUL',
        data: [orderMockOk] as any,
      }
      sinon.stub(orderService, 'listOrders').resolves(serviceResponse);

      await orderController.listOrders(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([orderMockOk]);
    });
  })
});
// import { expect } from 'chai';
// import sinon from 'sinon';
// import { ServiceResponse } from '../../../src/types/Service.reponse';
// import orderController from '../../../src/Controller/order.controller';
// import orderService from '../../../src/Service/order.service';
// import  orderMock from '../../mocks/order.mock';

// describe('OrderController', function () {
//   const req = {} as Request;
//   const res = {} as Response;

//   beforeEach(function () {
//     res.status = sinon.stub()returns(res);
//     res.json = sinon.stub().returns(res);
//     sinon.restore();
//   });

//   it('should return all orders with associated productIds when listing orders successfully', async function () {
//     const serviceResponse = ServiceResponse<OrderSequelizeModel[]> {
//       status: 'SUCCESSFUL',
//       data: [ orderMock.orderMockOk ] as any,
//     };
//     sinon.stub(orderService, 'listOrders').resolves(serviceResponse);
//     const req = {} as any;
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub().returnsThis(),
//     } as any;

//     await orderController.listOrders(req, res);

//     expect(res.status).to.have.been.calledWith(200);
//     expect(res.json).to.have.been.calledWith(serviceResponse.data);
//   });

//   it('should return an error when failing to list orders', async function () {
//     const serviceResponse = {
//       status: 'INVALID_DATA',
//       data: { message: 'Failed to fetch the orders.' },
//     };
//     sinon.stub(orderService, 'listOrders').resolves(serviceResponse);
//     const req = {} as any;
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub().returnsThis(),
//     } as any;

//     await orderController.listOrders(req, res);

//     expect(res.status).to.have.been.calledWith(400);
//     expect(res.json).to.have.been.calledWith(serviceResponse.data);
//   });
// });
