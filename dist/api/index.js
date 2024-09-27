"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const fastify_1 = __importDefault(require("fastify"));
const order_1 = __importDefault(require("./routes/order"));
async function startServer() {
    const server = (0, fastify_1.default)({ logger: true });
    server.register(order_1.default, { prefix: '/api/order' });
    try {
        const address = await server.listen({ port: 8080 });
        console.log(`server listening on ${address}`);
    }
    catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}
