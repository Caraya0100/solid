import { validateSchema } from "@/validator/service/validate-schema"
import { ecommerceDispatchSchema } from "@/dispatch/schemas/dispatch"
import { EcommerceDispatch, ErpDispatch } from "../interfaces/dispatch"

export default function transformtoErpDispatch(dispatch: EcommerceDispatch): ErpDispatch {
  validateSchema<EcommerceDispatch>(ecommerceDispatchSchema, dispatch)
  const { name, phone, email, ...location } = dispatch
  return {
    name: dispatch.name,
    phone: dispatch.phone,
    email: dispatch.email,
    address: `${location.state}, ${location.street}, ${location.zipCode}`
  }
}