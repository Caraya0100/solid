"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformtoErpCustomer;
const validate_schema_1 = require("../../validator/service/validate-schema");
const customer_1 = require("../schemas/customer");
function transformtoErpCustomer(customer) {
    (0, validate_schema_1.validateSchema)(customer_1.ecommerceCustomerSchema, customer);
    return {
        tin: customer.id,
        name: `${customer.firstName} ${customer.lastName}`,
        email: customer.email,
    };
}
