import Joi from 'joi'

export const packPriceDetailSchema = Joi.object({
  price: Joi.number().min(0).required(),
  numberOfItems: Joi.number().min(0).required(),
});

export const itemPriceDetailSchema = Joi.object({
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(0).required(),
  numberOfPacks: Joi.number().min(0).required(),
});