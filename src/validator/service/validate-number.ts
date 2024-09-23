import Joi from 'joi'

export function validatePositiveNumber(value: number) {
  try {
    Joi.assert(value, Joi.number().min(0).required())
  } catch (error) {
    throw new Error(error.message)
  }
}