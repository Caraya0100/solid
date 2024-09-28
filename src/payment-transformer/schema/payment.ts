import Joi from 'joi'

export const ecommercePaymentSchema = Joi.object({
  id: Joi.string().required(),
  total: Joi.number().min(0).required(),
  tax: Joi.number().min(0).required(),
})