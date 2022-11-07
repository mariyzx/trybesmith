import { Request, Response, NextFunction } from 'express';
import validateLogin from '../utils/validations/loginFields';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const error = validateLogin(req.body);

  if (error) return res.status(400).json({ message: error });

  next();
};

export default validateFields;