import { Request, Response, NextFunction } from 'express';
import validateLogin from '../utils/validations/loginFields';
import validateProduct from '../utils/validations/productFields';
import validateUser from '../utils/validations/userFields';

const anyRequired = 'any.required';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateLogin(req.body);

  if (error) return res.status(400).json({ message: error });

  next();
};

export const validateProductFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateProduct(req.body);
  if (error && error.type !== anyRequired) { 
    return res.status(422).json({ message: error.message }); 
  }
  
  if (error && error.type === anyRequired) { 
    return res.status(400).json({ message: error.message }); 
  }

  next();
};

export const validateUserFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateUser(req.body);

  if (error && error.type !== anyRequired) { 
    return res.status(422).json({ message: error.message }); 
  }
  
  if (error && error.type === anyRequired) { 
    return res.status(400).json({ message: error.message }); 
  }

  next();
};
