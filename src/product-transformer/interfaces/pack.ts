export interface EcommercePack {
  id: string
  name: string
  price: number
  quantity: number
  total: number
  properties: {
    externalId: string
    packNumberOfItems: number
  }
}

export interface PackDetail {
  quantity: number
  numberOfItems: number
  externalId: string
}