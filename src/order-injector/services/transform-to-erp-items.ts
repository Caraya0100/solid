import { ErpItem } from "@product/interfaces/item"
import { EcommercePack } from "@product/interfaces/pack"
import transformPackToItem from "@product/services/transform-packs-to-items"
import transformToPackDetail from "./transform-to-pack-detail"
import transformToItemDetail from "./transform-to-item-detail"

export default function transformToErpItems(packs: EcommercePack[]): ErpItem[] {
  return packs.map((pack) => {
    const packDetail = transformToPackDetail(pack)
    const itemDetail = transformToItemDetail(pack)
    const item: ErpItem = transformPackToItem(packDetail, itemDetail)
    return item
  })
}
