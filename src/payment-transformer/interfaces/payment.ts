export interface EcommercePayment {
  id: string
  total: number
  tax: number
}

export interface ErpPayment {
  number: string
  taxRate: number
  taxAmount: number
  total: number
}
