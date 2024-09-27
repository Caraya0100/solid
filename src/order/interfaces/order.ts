import { EcommerceDispatch } from "@/dispatch/interfaces/dispatch"
import { EcommercePack } from "@/product/interfaces/pack"
import { ErpDispatch } from "@/dispatch/interfaces/dispatch"
import { ErpItem } from "@/product/interfaces/item"
import { EcommerceCustomer, ErpCustomer } from "@/customer/interfaces/customer"
import { ErpPayment } from "@/payment/interfaces/payment"

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
