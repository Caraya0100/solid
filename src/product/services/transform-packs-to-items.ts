import { validateSchema } from "../../validator/service/validate-schema"
import { ErpItem, ItemDetail } from "../interfaces/item"
import { PackDetail } from "../interfaces/pack"
import { itemDetailSchema } from "../schemas/item"
import { packDetailSchema } from "../schemas/pack"

function mapPackToItem(pack: PackDetail, item: ItemDetail): ErpItem {
  return {
    code: pack.externalId,
    price: item.price,
    quantity: pack.numberOfItems * pack.quantity,
    totalPrice: item.totalPrice,
  }
}

export default function transformPackToItem(pack: PackDetail, item: ItemDetail): ErpItem {
  validateSchema<PackDetail>(packDetailSchema, pack)
  validateSchema<ItemDetail>(itemDetailSchema, item)
  return mapPackToItem(pack, item)
}
