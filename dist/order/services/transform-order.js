"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformToErpOrder;
const transform_to_erp_payment_1 = __importDefault(require("../../payment/services/transform-to-erp-payment"));
const transform_to_erp_items_1 = __importDefault(require("../../product/services/transform-to-erp-items"));
const transform_to_erp_dispatch_1 = __importDefault(require("../../dispatch/services/transform-to-erp-dispatch"));
const transform_dispatch_1 = __importDefault(require("../../customer/services/transform-dispatch"));
function transformToErpOrder(order) {
    const items = (0, transform_to_erp_items_1.default)(order.products);
    const dispatch = (0, transform_to_erp_dispatch_1.default)(order.dispatch);
    const customer = (0, transform_dispatch_1.default)(order.customer);
    const payment = (0, transform_to_erp_payment_1.default)(order);
    const erpOrder = { number: order.id, items, dispatch, customer, ...payment };
    return erpOrder;
}
