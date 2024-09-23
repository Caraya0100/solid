import { EcommerceOrder } from "../interfaces/ecommerce-order"
import { ErpOrderFetcher } from "../interfaces/erp-order"
import transformToErpOrder from "./transform-to-erp-order"

export default async function injectOrder(ecommerceOrder: EcommerceOrder, fetcher: ErpOrderFetcher) {
  const erpOrder = transformToErpOrder(ecommerceOrder)
  await fetcher(erpOrder)
}