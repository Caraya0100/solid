import { validateSchema } from "@/validator/service/validate-schema"
import { EcommerceCustomer, ErpCustomer } from "../interfaces/customer"
import { ecommerceCustomerSchema } from "../schemas/customer"

export default function transformtoErpCustomer(customer: EcommerceCustomer): ErpCustomer {
  validateSchema<EcommerceCustomer>(ecommerceCustomerSchema, customer)
  return {
    tin: customer.id,
    name: `${customer.firstName} ${customer.lastName}`,
    email: customer.email,
  }
}