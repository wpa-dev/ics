export interface Action {
  (config: EventSchema): Result;
}

export interface EventSchema {
  productId: string,
  uid?: string,
  title?: string,
  publish?: string
}

export interface Result {
  value?: any,
  error?: any
}
