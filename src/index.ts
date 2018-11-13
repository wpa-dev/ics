import { flow } from 'lodash'
import { validate } from './validate'
import { format } from './format'

const createEvent = flow([validate, format]);

export { createEvent }
