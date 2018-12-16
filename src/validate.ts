import { EventSchema, Result, Action } from './interfaces'

const defaults: EventSchema = {
  productId: 'adamgibbons/ics',
  title: 'Untitled event'
}

function validates(config: EventSchema): Result {
  // TODO return true - or - false, reason
  const { productId } = config

  if (productId.length < 5) {
    return { error: Error('productId length must be greater than 5'), value: null }
  }

  return { error: null }
}

const validate: Action = (config: EventSchema): Result => {
  const { error, value } = validates(config)

  if (error) return { error }

  let validatedSchema: EventSchema = Object.assign({}, defaults, config)

  return {
    error,
    value: validatedSchema
  }
}

export { validate }