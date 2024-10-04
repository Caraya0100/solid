import { validateSchema } from "@/validator/service/validate-schema"
import { ecommerceDispatchSchema } from "@/dispatch-transformer/schemas/dispatch"
import { EcommerceDispatch, ErpDispatch } from "../interfaces/dispatch"

export default function transformtoErpDispatch(dispatch: EcommerceDispatch): ErpDispatch {
  validateSchema<EcommerceDispatch>(ecommerceDispatchSchema, dispatch)
  const { name, phone, email, ...location } = dispatch
  return {
    name: dispatch.name,
    phone: dispatch.phone,
    email: dispatch.email,
    address: `${location.street}, ${location.city}, ${location.state}, ${location.zipCode}`
  }
}