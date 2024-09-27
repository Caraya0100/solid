"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecommercePaymentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ecommercePaymentSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    total: joi_1.default.number().min(0).required(),
    tax: joi_1.default.number().min(0).required(),
});
