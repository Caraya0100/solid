import { getItemPrice, getTotalPrice } from "@price/services/get-price"
import { EcommercePack } from "@product/interfaces/pack"

export default function transformToItemDetail(pack: EcommercePack) {
  const itemPrice = getItemPrice({ 
    price: pack.price, 
    numberOfItems: pack.properties.packNumberOfItems 
  })
  const totalPrice = getTotalPrice({
    price: itemPrice, 
    quantity: pack.properties.packNumberOfItems,
    numberOfPacks: pack.quantity
  })
  return { price: itemPrice, totalPrice: totalPrice }
}