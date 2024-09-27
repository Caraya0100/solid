"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformToErpItems;
const validate_schema_1 = require("../../validator/service/validate-schema");
const pack_1 = require("../../product/schemas/pack");
function transformToItem(pack) {
    const { price, quantity, properties } = pack;
    const { packNumberOfItems, externalId } = properties;
    const itemPrice = price * packNumberOfItems;
    const itemTotalPrice = itemPrice * packNumberOfItems * quantity;
    return {
        code: externalId,
        price: itemPrice,
        quantity: packNumberOfItems * quantity,
        totalPrice: itemTotalPrice,
    };
}
function transformToErpItems(packs) {
    return packs.map((pack) => {
        (0, validate_schema_1.validateSchema)(pack_1.ecommercePackSchema, pack);
        return transformToItem(pack);
    });
}
