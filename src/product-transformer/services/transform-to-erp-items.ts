import { validateSchema } from "@/validator/service/validate-schema"
import { ecommercePackSchema } from "@/product-transformer/schemas/pack"
import { ErpItem } from "../interfaces/item"
import { EcommercePack } from "../interfaces/pack"

function transformToItem(pack: EcommercePack): ErpItem {
  const { price, quantity, properties } = pack
  const { packNumberOfItems, externalId } = properties
  const itemPrice = price * packNumberOfItems 
  const itemTotalPrice = itemPrice * packNumberOfItems * quantity
  return {
    code: externalId,
    price: itemPrice,
    quantity: packNumberOfItems * quantity,
    totalPrice: itemTotalPrice,
  }
}

export default function transformToErpItems(packs: EcommercePack[]): ErpItem[] {
  return packs.map((pack) => {
    validateSchema<EcommercePack>(ecommercePackSchema, pack)
    return transformToItem(pack)
  })
}
