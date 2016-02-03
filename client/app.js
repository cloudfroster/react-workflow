import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import routes from './routes'
import history from './history'
import configureStore from './store/configureStore'

const store = window.store = configureStore()

if(__DEV__) {
  const DevTools = require('./containers/DevTools').DevTools
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app'))
} else {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app'))
}
