import orderFetcher from '../fetcher/order-fetcher';
import { EcommerceOrder } from '@order-injector/interfaces/ecommerce-order';
import injectOrder from '@order-injector/services/inject-order';
import { FastifyReply, FastifyRequest } from 'fastify';

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
