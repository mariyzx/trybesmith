import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public ProductService = new ProductService();

  create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.ProductService.create(product);
    res.status(201).json(productCreated);
  };

  getAll = async (req: Request, res: Response) => {
    const products = await this.ProductService.getAll();
    res.status(200).json(products);
  };
}