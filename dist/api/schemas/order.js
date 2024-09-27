"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderSchema = addOrderSchema;
function addOrderSchema(fastify) {
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
    });
}
