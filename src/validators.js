import { BUTTON_TYPES } from './constants'
export function isButtonValid(value) {
  return isNotEmptyString(value)
}
export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}
function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}
