import Joi from 'joi'

export function validateSchema<T>(schema: Joi.ObjectSchema<T>, value: T) {
  const { error } = schema.validate(value)
  if (error) throw new Error(error.message)
}