import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');
  
    if (token) {
      const decoded = jwt.verify(token, secret as string);

      req.body.user = decoded;
      
      next();
    } else {
      res.status(401).json({ message: 'Token not found' });
    }
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};