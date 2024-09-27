"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductSchema = addProductSchema;
function addProductSchema(fastify) {
    fastify.addSchema({
        $id: 'properties',
        type: 'object',
        properties: {
            externalId: 'string',
        },
    });
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
    });
}
