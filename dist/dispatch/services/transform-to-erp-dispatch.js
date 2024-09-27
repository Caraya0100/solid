"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformtoErpDispatch;
const validate_schema_1 = require("../../validator/service/validate-schema");
const dispatch_1 = require("../../dispatch/schemas/dispatch");
function transformtoErpDispatch(dispatch) {
    (0, validate_schema_1.validateSchema)(dispatch_1.ecommerceDispatchSchema, dispatch);
    const { name, phone, email, ...location } = dispatch;
    return {
        name: dispatch.name,
        phone: dispatch.phone,
        email: dispatch.email,
        address: `${location.state}, ${location.street}, ${location.zipCode}`
    };
}
