import { FastifyInstance } from 'fastify';

export function addOrderSchema(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: 'order',
    type: 'object',
    properties: {
      id: 'string',
      customer: {
        $ref: 'customer' 
      },
      products: {
        type: 'array',
        $ref: 'product'
      }
    },
  })
}