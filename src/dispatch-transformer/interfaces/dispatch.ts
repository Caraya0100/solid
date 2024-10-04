export interface DispatchReceiver {
  name: string
  phone: string
  email: string
}

export interface DispatchLocation {
  state: string
  city: string
  street: string
  zipCode: string
}

export interface EcommerceDispatch extends DispatchReceiver, DispatchLocation {} 

export interface ErpDispatch extends DispatchReceiver {
  address: string
}