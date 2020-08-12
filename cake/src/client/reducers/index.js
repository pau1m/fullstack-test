import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'

export default combineReducers({
  cakes : cakeReducer
})
