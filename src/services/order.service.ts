import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public order = new OrderModel();

  public getAll = async (): Promise<IOrder[]> => {
    const order = await this.order.getAll();
    return order;
  };
}