import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';

const validateUser = (user: IUser) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(user);

  if (error) return error.details[0];
};

export default validateUser;