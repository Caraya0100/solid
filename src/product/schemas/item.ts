import Joi from 'joi'

export const itemDetailSchema = Joi.object({
  price: Joi.number().min(0).required(),
  totalPrice: Joi.number().min(0).required(),
});