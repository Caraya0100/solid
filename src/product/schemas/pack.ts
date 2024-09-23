import Joi from 'joi';

export const packDetailSchema = Joi.object({
  quantity: Joi.number().min(0).required(),
  numberOfItems: Joi.number().min(0).required(),
  externalId: Joi.string().required(),
});
