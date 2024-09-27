"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = injectOrder;
const transform_order_1 = __importDefault(require("./transform-order"));
async function injectOrder(order, fetcher) {
    const erpOrderRequest = (0, transform_order_1.default)(order);
    await fetcher(erpOrderRequest);
}
