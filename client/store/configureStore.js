import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reduxReactRouter, ReduxRouter} from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import routes from '../routes'
import { persistState } from 'redux-devtools'

function configureStore(initState) {

  let finalCreateStore;

  if(process.env.NODE_ENV === 'development') {
    //const createLogger = require('redux-logger')
    const DevTools = require('../containers/DevTools')
    finalCreateStore = compose(
      applyMiddleware(
        thunk,
        /* createLogger(), */
      ),
      reduxReactRouter({
        routes,
        createHistory,
      }),
      DevTools.instrument(),
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
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

export default configureStore

