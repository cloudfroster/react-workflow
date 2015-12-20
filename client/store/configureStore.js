import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reduxReactRouter, ReduxRouter} from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import routes from '../routes'

function configureStore(initState) {

  let finalCreateStore;

  if(__DEV__) {
    //const createLogger = require('redux-logger')
    const allDevTools = require('../containers/DevTools')
    finalCreateStore = compose(
      applyMiddleware(
        thunk,
        /* createLogger(), */
      ),
      reduxReactRouter({
        routes,
        createHistory,
      }),
      allDevTools.DevTools.instrument(),
      allDevTools.persistState(allDevTools.getDebugSessionKey()),
    )(createStore)

  } else {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      reduxReactRouter({
        routes,
        createHistory,
      }),
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      window.rootCombineReducer.user = require('../reducers/user')
      const nextReducer = combineReducers(window.rootCombineReducer)
      store.replaceReducer(nextReducer)
    });
  }

  return store
}

export default configureStore

