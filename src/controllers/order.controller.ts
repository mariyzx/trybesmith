import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import validateOrder from '../utils/validations/orderFields';

export default class OrderController {
  public orderService = new OrderService();

  getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const userId = req.body.user.id;
    const { productsIds } = req.body;
    const order = { userId, productsIds };

    const error = validateOrder(req.body);

    if (error && error.type !== 'any.required') { 
      return res.status(422).json({ message: error.message });
    }
    if (error && error.type === 'any.required') { 
      return res.status(400).json({ message: error.message }); 
    }

    await this.orderService.create(order);

    res.status(201).json(order);
  };
}