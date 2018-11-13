import { EventSchema, Result, Action } from './interfaces'

function formatValue(value: EventSchema): string {
  return 'foo'
}

function format (result: Result): Result {
  const { error, value } = result

  if (error) {
    return { error, value }
  }

  let formattedValue = formatValue(value)

  return {
    error: null,
    value: formattedValue
  }
}

export { format }
