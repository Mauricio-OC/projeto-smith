import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/Service.reponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  try {
    const newProduct = await ProductModel.create(product);
    const serviceResponse: ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      data: newProduct.dataValues,
    };
    return serviceResponse;
  } catch (error) {
    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'Failed to create the product.' },
    };
    return serviceResponse;
  }
}
async function listProducts(): Promise<ServiceResponse<Product[]>> {
  try {
    const products = await ProductModel.findAll();
    const serviceResponse: ServiceResponse<Product[]> = {
      status: 'SUCCESSFUL',
      data: products.map((product) => product.dataValues),
    };
    return serviceResponse;
  } catch (error) {
    const serviceResponse: ServiceResponse<Product[]> = {
      status: 'INVALID_DATA',
      data: { message: 'Failed to fetch the products.' },
    };
    return serviceResponse;
  }
}

export default {
  createProduct,
  listProducts,
};
