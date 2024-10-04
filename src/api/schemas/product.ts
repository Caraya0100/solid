import { FastifyInstance } from 'fastify';

export function addProductSchema(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: 'properties',
    type: 'object',
    properties: {
      externalId: 'string',
    },
  })
  
  fastify.addSchema({
    $id: 'product',
    type: 'object',
    properties: {
      id: 'string',
      name: 'string',
      price: 'number',
      quantity: 'number',
      properties: 'properties'
    },
  })
}