"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformToErpPayment;
const get_tax_1 = require("../../price/services/get-tax");
const validate_schema_1 = require("../../validator/service/validate-schema");
const payment_1 = require("../schema/payment");
function transformToErpPayment(invoice) {
    (0, validate_schema_1.validateSchema)(payment_1.ecommercePaymentSchema, invoice);
    return {
        number: invoice.id,
        taxRate: invoice.tax,
        taxAmount: (0, get_tax_1.calculateTaxAmount)(invoice.total, invoice.tax),
        total: (0, get_tax_1.calculatePriceWithTax)(invoice.total, invoice.tax)
    };
}
