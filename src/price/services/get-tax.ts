export function calculateTaxAmount(basePrice: number, taxRate: number) {
  return basePrice * (taxRate / 100)
}

export function calculatePriceWithTax(basePrice: number, taxRate: number): number {
  return basePrice + calculateTaxAmount(basePrice, taxRate)
}
