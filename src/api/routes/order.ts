import { FastifyInstance, RouteShorthandOptions } from 'fastify';

import { EcommerceOrder } from '@/order/interfaces/order';
import { addCustomerSchema } from '../schemas/customer';
import { addProductSchema } from '../schemas/product';
import { addOrderSchema } from '../schemas/order';
import { createOrder } from '../controllers/order';

export default async function orderRouter(fastify: FastifyInstance) {
  addCustomerSchema(fastify)
  addProductSchema(fastify)
  addOrderSchema(fastify)

  const opts: RouteShorthandOptions = {
    schema: {
      body: {
        $ref: 'order'
      }
    }
  }

  fastify.post<{Body: EcommerceOrder }>('/', opts, createOrder);
}