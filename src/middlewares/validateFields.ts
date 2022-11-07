import { Request, Response, NextFunction } from 'express';
import validateLogin from '../utils/validations/loginFields';
import validateProduct from '../utils/validations/productFields';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateLogin(req.body);

  if (error) return res.status(400).json({ message: error });

  next();
};

export const validateProductFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateProduct(req.body);
  if (error && error.type !== 'any.required') { 
    return res.status(422).json({ message: error.message }); 
  }
  
  if (error && error.type === 'any.required') { 
    return res.status(400).json({ message: error.message }); 
  }

  next();
};
