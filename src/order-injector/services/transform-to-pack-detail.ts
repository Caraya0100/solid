import { EcommercePack, PackDetail } from "@product/interfaces/pack";

export default function transformToPackDetail(pack: EcommercePack): PackDetail {
  return {
    quantity: pack.quantity, 
    numberOfItems: pack.properties.packNumberOfItems, 
    externalId: pack.properties.externalId
  }
}
