import { EcommerceOrder, ErpOrder } from "../interfaces/order"
import transformToErpPayment from "@/payment/services/transform-to-erp-payment"
import transformToErpItems from "@/product/services/transform-to-erp-items"
import transformtoErpDispatch from "@/dispatch/services/transform-to-erp-dispatch"
import transformtoErpCustomer from "@/customer/services/transform-dispatch"

export default function transformToErpOrder(order: EcommerceOrder): ErpOrder {
  const items = transformToErpItems(order.products)
  const dispatch = transformtoErpDispatch(order.dispatch)
  const customer = transformtoErpCustomer(order.customer)
  const payment = transformToErpPayment(order)
  const erpOrder: ErpOrder = { number: order.id, items, dispatch, customer, ...payment }
  return erpOrder
}
