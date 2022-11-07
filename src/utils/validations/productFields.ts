import Joi from 'joi';
import { IProduct } from '../../interfaces/IProduct';

const validateProduct = (product: IProduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(product);

  if (error) return error.details[0];
};

export default validateProduct;