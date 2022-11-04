import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public product = new ProductModel();

  public create = async (productData: IProduct): Promise<IProduct> => (
    this.product.create(productData)
  );
}