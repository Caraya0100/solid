import { EcommerceOrder, ErpOrder } from "../interfaces/order"
import transformToErpPayment from "@/payment-transformer/services/transform-to-erp-payment"
import transformToErpItems from "@/product-transformer/services/transform-to-erp-items"
import transformtoErpDispatch from "@/dispatch-transformer/services/transform-to-erp-dispatch"
import transformtoErpCustomer from "@/customer-transformer/services/transform-dispatch"

export default function buildErpOrder(order: EcommerceOrder): ErpOrder {
  const items = transformToErpItems(order.products)
  const dispatch = transformtoErpDispatch(order.dispatch)
  const customer = transformtoErpCustomer(order.customer)
  const payment = transformToErpPayment(order)
  const erpOrder: ErpOrder = { number: order.id, items, dispatch, customer, ...payment }
  return erpOrder
}
