import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'
import user from './user'

const rootReducer = combineReducers({
  router,
  user,
})


export default rootReducer
module.exports = rootReducer
