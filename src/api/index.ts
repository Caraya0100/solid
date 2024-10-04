import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http'
import orderRouter from './routes/order';

export async function startServer() {
  const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
  > = fastify({ logger: true })

  server.register(orderRouter, { prefix: '/api/order' });

  try {
    const address = await server.listen({ port: 8080 })
    console.log(`server listening on ${address}`)
  } catch (error) {
    server.log.error(error);
    process.exit(1)
  }
}
