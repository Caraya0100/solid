import { FastifyReply, FastifyRequest } from 'fastify'

import { EcommerceOrder } from '@/order/interfaces/order'
import injectOrder from '@/order/services/inject-order'
import orderFetcher from '../fetcher/order-fetcher'

export async function createOrder(
  request: FastifyRequest<{
    Body: EcommerceOrder
  }>,
  reply: FastifyReply,
) {
  try {
    await injectOrder(request.body, orderFetcher)
    return reply.code(200).send();
  } catch (err) {
    return reply.code(400).send({ error: (err as Error).message});
  }
};
