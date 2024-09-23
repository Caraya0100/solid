import { EcommerceDispatch } from "../../dispatch/interfaces/dispatch"
import { EcommercePack } from "../../product/interfaces/pack"

export interface EcommerceOrder {
  id: string
  dispatch: EcommerceDispatch
  products: EcommercePack[]
  total: number
  tax: number
}

