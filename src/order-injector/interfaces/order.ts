import { EcommerceDispatch } from "@/dispatch-transformer/interfaces/dispatch"
import { EcommercePack } from "@/product-transformer/interfaces/pack"
import { ErpDispatch } from "@/dispatch-transformer/interfaces/dispatch"
import { ErpItem } from "@/product-transformer/interfaces/item"
import { EcommerceCustomer, ErpCustomer } from "@/customer-transformer/interfaces/customer"
import { ErpPayment } from "@/payment-transformer/interfaces/payment"

export interface EcommerceOrder {
  id: string
  customer: EcommerceCustomer
  dispatch: EcommerceDispatch
  products: EcommercePack[]
  total: number
  tax: number
}

export interface ErpOrder extends ErpPayment {
  customer: ErpCustomer
  dispatch: ErpDispatch
  items: ErpItem[]
}
