import { validatePositiveNumber } from "../../validator/service/validate-number"

export function calculateTaxAmount(basePrice: number, taxRate: number) {
  return basePrice * (taxRate / 100)
}

export function calculatTotalWithTax(basePrice: number, taxRate: number): number {
  return basePrice + calculateTaxAmount(basePrice, taxRate)
}

export function getTaxAmount(basePrice: number, taxRate: number) {
  validatePositiveNumber(basePrice)
  validatePositiveNumber(taxRate)
  return basePrice * (taxRate / 100)
}

export function getTotalWithTax(basePrice: number, taxRate: number): number {
  validatePositiveNumber(basePrice)
  validatePositiveNumber(taxRate)
  return basePrice + calculateTaxAmount(basePrice, taxRate)
}
