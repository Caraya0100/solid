"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxAmount = calculateTaxAmount;
exports.calculatePriceWithTax = calculatePriceWithTax;
function calculateTaxAmount(basePrice, taxRate) {
    return basePrice * (taxRate / 100);
}
function calculatePriceWithTax(basePrice, taxRate) {
    return basePrice + calculateTaxAmount(basePrice, taxRate);
}
