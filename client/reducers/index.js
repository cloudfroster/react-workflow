import {combineReducers} from 'redux'
import {routeReducer as router} from 'redux-simple-router'
import user from './user'

const rootCombineReducer = window.rootCombineReducer = {
  router,
  user,
}

const rootReducer = combineReducers(rootCombineReducer)

export default rootReducer
