
import buildOrderItems from "./transform-to-erp-items"
import { getTaxAmount, getTotalWithTax } from "../../price/services/get-tax"
import { EcommerceOrder } from "../interfaces/ecommerce-order"
import { ErpOrder } from "../interfaces/erp-order"
import transformDispatch from "../../dispatch/services/transform-dispatch"

export default function transformToErpOrder(ecommerceOrder: EcommerceOrder): ErpOrder {
  return {
    code: ecommerceOrder.id,
    dispatch: transformDispatch(ecommerceOrder.dispatch),
    items: buildOrderItems(ecommerceOrder.products),
    taxAmount: getTaxAmount(ecommerceOrder.total, ecommerceOrder.tax),
    total: getTotalWithTax(ecommerceOrder.total, ecommerceOrder.tax)
  }
}
