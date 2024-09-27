"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomerSchema = addCustomerSchema;
function addCustomerSchema(fastify) {
    fastify.addSchema({
        $id: 'customer',
        type: 'object',
        properties: {
            id: 'string',
            name: 'string',
            address: 'string',
            phone: 'string',
        },
    });
}
