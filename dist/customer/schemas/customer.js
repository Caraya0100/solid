"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecommerceCustomerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ecommerceCustomerSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    state: joi_1.default.string().required(),
    street: joi_1.default.string().required(),
    zipCode: joi_1.default.string().required(),
});
