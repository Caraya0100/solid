import { FastifyInstance } from 'fastify';

export function addCustomerSchema(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: 'customer',
    type: 'object',
    properties: {
      id: 'string',
      name: 'string',
      address: 'string',
      phone: 'string',
    },
  })
}