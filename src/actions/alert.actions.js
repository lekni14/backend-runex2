import { alertConstants } from '../utils/constants'

export const alertActions = {
  success,
  error,
  clear,
  loading
}

function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { type: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}

function loading() {
  return { type: alertConstants.LOADING }
}