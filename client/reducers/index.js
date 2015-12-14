import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'
import user from './user'

const rootCombineReducer = window.rootCombineReducer = {
  router,
  user,
}

const rootReducer = combineReducers(rootCombineReducer)

export default rootReducer
module.exports = rootReducer
