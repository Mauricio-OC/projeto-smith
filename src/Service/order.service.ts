import { Sequelize } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
// import { Order } from '../types/Order';
import { ServiceResponse } from '../types/Service.reponse';

async function listOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [Sequelize.literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],
    ],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    group: ['Order.id'],
    raw: true,
  });

  const serviceResponse: ServiceResponse<OrderSequelizeModel[]> = {
    status: 'SUCCESSFUL', data: orders };
  return serviceResponse;
}

// async function listOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
//   const orders = await OrderModel.findAll();
//   const ordersWithProductIds = await Promise.all(
//     orders.map(async (order) => {
//       const products = await ProductModel.findAll({
//         where: { orderId: order.id },
//         attributes: ['id'],
//       });
//       const productIds = products.map((product) => product.id);
//       return {
//         id: order.id,
//         userId: order.userId,
//         productIds,
//       };
//     }),
//   );
//   const serviceResponse: ServiceResponse<Order[]> = {
//     status: 'SUCCESSFUL',
//     data: ordersWithProductIds,
//     return serviceResponse
//   };
// } {
//   const serviceResponse: ServiceResponse<Order[]> = {
//     status: 'INVALID_DATA',
//     data: { message: 'Failed to fetch the orders.' },
//     return serviceResponse,
//   };
// }

export default {
  listOrders,
};
