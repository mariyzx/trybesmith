import { INewOrder, IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public order = new OrderModel();

  public getAll = async (): Promise<IOrder[]> => {
    const order = await this.order.getAll();
    return order;
  };

  public create = async (order: INewOrder): Promise<boolean> => {
    const orderCreated = await this.order.create(order);

    if (orderCreated) return true;
    
    return false;
  };
}