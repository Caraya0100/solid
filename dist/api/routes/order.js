"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = orderRouter;
const customer_1 = require("../schemas/customer");
const product_1 = require("../schemas/product");
const order_1 = require("../schemas/order");
const order_2 = require("../controllers/order");
async function orderRouter(fastify) {
    (0, customer_1.addCustomerSchema)(fastify);
    (0, product_1.addProductSchema)(fastify);
    (0, order_1.addOrderSchema)(fastify);
    const opts = {
        schema: {
            body: {
                $ref: 'order'
            }
        }
    };
    fastify.post('/', opts, order_2.createOrder);
}
