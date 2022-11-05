import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  public orderService = new OrderService();

  getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };
}