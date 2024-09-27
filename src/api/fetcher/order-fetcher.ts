import { ErpOrderFetcher } from "@/order/interfaces/fetcher"
import { ErpOrder } from "@/order/interfaces/order"

const orderFetcher: ErpOrderFetcher = async (order: ErpOrder) => {
  try {
    const response = await fetch(process.env.ERP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default orderFetcher