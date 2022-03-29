import { uuid } from '@cfworker/uuid';
import { formatDate } from './utils'

const defaults = {
  title: 'Untitled event',
  productId: 'adamgibbons/ics',
  method: 'PUBLISH',
  uid: uuid(),
  timestamp: formatDate(null, 'utc'),
  start: formatDate(null, 'utc')
}

export default defaults
