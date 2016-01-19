import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {syncHistory} from 'redux-simple-router'
import thunk from 'redux-thunk'
import history from '../history'
import rootReducer from '../reducers'

function configureStore(initState) {

  let finalCreateStore

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history)

  if(__DEV__) {
    //const createLogger = require('redux-logger')
    const allDevTools = require('../containers/DevTools')
    finalCreateStore = compose(
      applyMiddleware(
        reduxRouterMiddleware,
        thunk,
        /* createLogger(), */
      ),
      allDevTools.DevTools.instrument(),
      allDevTools.persistState(allDevTools.getDebugSessionKey()),
    )(createStore)

  } else {
    finalCreateStore = compose(
      applyMiddleware(
        reduxRouterMiddleware,
        thunk,
      ),
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      window.rootCombineReducer.user = require('../reducers/user')
      const nextReducer = combineReducers(window.rootCombineReducer)
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore

