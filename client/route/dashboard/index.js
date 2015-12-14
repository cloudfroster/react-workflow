import {combineReducers} from 'redux'

module.exports = {
  path: '/',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      // ensure not init reducers again
      if(!window.rootCombineReducer.dashboard) {
        window.rootCombineReducer.dashboard = require('./reducers')
        const nextReducer = combineReducers(window.rootCombineReducer)
        window.store.replaceReducer(nextReducer)
      }
      cb(null, require('./containers/App'))

    })
  },
}
