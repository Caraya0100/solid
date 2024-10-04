import { ErpOrder } from "./order";

export type ErpOrderFetcher = (order: ErpOrder) => Promise<void>