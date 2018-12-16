import { EventSchema, Result, Action } from './interfaces'

function formatValue(value: EventSchema): string {
  const { productId, title } = value

  let result = 'BEGIN:VEVENT\r\n'
  result += 'VERSION:2.0\r\n'
  result += 'CALSCALE:GREGORIAN'
  result += `PRODID:${productId}\r\n`
  result += 'END:VEVENT\r\n'
  result += 'END:VCALENDAR\r\n'

  return result
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
