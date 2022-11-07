import Joi from 'joi';
import { ILogin } from '../../interfaces/ILogin';

const validateLogin = (login: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().required().messages({
      'string.empty': 'username is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'password is required',
    }),
  });

  const { error } = schema.validate(login);

  if (error) return error.details[0].message;
};

export default validateLogin;