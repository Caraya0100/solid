import { ErpDispatch } from "../../dispatch/interfaces/dispatch"
import { ErpItem } from "../../product/interfaces/item"

export interface ErpOrder {
  code: string
  dispatch: ErpDispatch
  items: ErpItem[]
  taxAmount: number
  total: number
}

export type ErpOrderFetcher = (order: ErpOrder) => Promise<void>