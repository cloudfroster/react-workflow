import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'
import user from './user'
import dashboard from '../route/dashboard/reducers'

const rootReducer = combineReducers({
  router,
  user,
  dashboard,
})


export default rootReducer
module.exports = rootReducer
