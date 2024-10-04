import { EcommerceOrder } from "../interfaces/order"
import { ErpOrderFetcher } from "../interfaces/fetcher"
import buildErpOrder from "./build-erp-order"

export default async function injectOrder(order: EcommerceOrder, fetcher: ErpOrderFetcher) {
  const erpOrder = buildErpOrder(order)
  await fetcher(erpOrder)
}
