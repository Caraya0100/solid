import { calculateTaxAmount, calculatePriceWithTax } from "@/price/services/get-tax"
import { validateSchema } from "@/validator/service/validate-schema"
import { EcommercePayment, ErpPayment } from "../interfaces/payment"
import { ecommercePaymentSchema } from "../schema/payment"

export default function transformToErpPayment(invoice: EcommercePayment): ErpPayment {
  validateSchema<EcommercePayment>(ecommercePaymentSchema, invoice)
  return {
    number: invoice.id,
    taxRate: invoice.tax,
    taxAmount: calculateTaxAmount(invoice.total, invoice.tax),
    total: calculatePriceWithTax(invoice.total, invoice.tax)
  }
}
