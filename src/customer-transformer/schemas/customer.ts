import Joi from 'joi'

export const ecommerceCustomerSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  state: Joi.string().required(),
  street: Joi.string().required(),
  zipCode: Joi.string().required(),
});