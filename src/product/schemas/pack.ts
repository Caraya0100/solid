import Joi from 'joi'

export const ecommercePackSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(0).required(),
  total: Joi.number().min(0).required(),
  properties: {
    externalId: Joi.string().required(),
    packNumberOfItems: Joi.number().min(0).required(),
  }
})