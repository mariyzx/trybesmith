import Joi from 'joi';
import { IProduct } from '../../interfaces/IProduct';

const validateProduct = (product: IProduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      'any.required': '"name" is required',
      'string.base': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
    }),
    amount: Joi.string().min(3).required().messages({
      'any.required': '"amount" is required',
      'string.base': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
    }),
  });

  const { error } = schema.validate(product);

  if (error) return error.details[0];
};

export default validateProduct;