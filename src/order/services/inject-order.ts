import { EcommerceOrder } from "../interfaces/order"
import { ErpOrderFetcher } from "../interfaces/fetcher"
import transformToErpOrder from "./transform-order"

export default async function injectOrder(order: EcommerceOrder, fetcher: ErpOrderFetcher) {
  const erpOrderRequest = transformToErpOrder(order)
  await fetcher(erpOrderRequest)
}
