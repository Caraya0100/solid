import { EcommerceDispatch, ErpDispatch, DispatchLocation } from "../interfaces/dispatch";

function transformDispatch(dispatch: EcommerceDispatch): ErpDispatch {
  const { name, phone, email, ...location } = dispatch
  return {
    name: dispatch.name,
    phone: dispatch.phone,
    email: dispatch.email,
    address: buildDispatchAddress(location)
  }
}

function buildDispatchAddress(location: DispatchLocation): string {
  return `${location.state}, ${location.street}, ${location.zipCode}`
}

export default transformDispatch