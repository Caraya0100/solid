import { validateSchema } from "../../validator/service/validate-schema"
import { ItemPriceDetail, PackPriceDetail } from "../interfaces/price"
import { itemPriceDetailSchema, packPriceDetailSchema } from "../schemas/price"

function calculatItemPriceFromPack(pack: PackPriceDetail) {
  return pack.price / pack.numberOfItems
}

function calculateTotalPrice(item: ItemPriceDetail) {
  return item.price * item.quantity * item.numberOfPacks
}

export function getItemPrice(pack: PackPriceDetail) {
  validateSchema<PackPriceDetail>(packPriceDetailSchema, pack)
  return calculatItemPriceFromPack(pack)
}

export function getTotalPrice(item: ItemPriceDetail) {
  validateSchema<ItemPriceDetail>(itemPriceDetailSchema, item)
  return calculateTotalPrice(item)
}