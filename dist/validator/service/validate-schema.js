"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = validateSchema;
function validateSchema(schema, value) {
    const { error } = schema.validate(value);
    if (error)
        throw new Error(error.message);
}
