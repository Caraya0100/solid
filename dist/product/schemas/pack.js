"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecommercePackSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ecommercePackSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    price: joi_1.default.number().min(0).required(),
    quantity: joi_1.default.number().min(0).required(),
    total: joi_1.default.number().min(0).required(),
    properties: {
        externalId: joi_1.default.string().required(),
        packNumberOfItems: joi_1.default.number().min(0).required(),
    }
});
