"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = createOrder;
const inject_order_1 = __importDefault(require("../../order/services/inject-order"));
const order_fetcher_1 = __importDefault(require("../fetcher/order-fetcher"));
async function createOrder(request, reply) {
    try {
        await (0, inject_order_1.default)(request.body, order_fetcher_1.default);
        return reply.code(200).send();
    }
    catch (err) {
        return reply.code(400).send({ error: err.message });
    }
}
;
