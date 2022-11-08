import Joi from 'joi';
import { INewOrder } from '../../interfaces/IOrder';

const validateOrder = (order: INewOrder) => {
  const schema = Joi.object({
    user: Joi.object({
      id: Joi.number(),
      username: Joi.string(),
      iat: Joi.number(),
      exp: Joi.number(),
    }),
    productsIds: Joi.array().min(1).items(Joi.number()).required()
      .messages({
        'array.min': '"productsIds" must include only numbers',
      }),
  });

  const { error } = schema.validate(order);

  if (error) return error.details[0];
};

export default validateOrder;