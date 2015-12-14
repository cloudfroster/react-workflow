import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import base from './theme/base.less'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import configureStore from './store/configureStore'

const store = window.store = configureStore()

if(process.env.NODE_ENV === 'development') {
  const DevTools = require('./containers/DevTools').DevTools;
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <ReduxRouter
                    routes={[]}
                    location={{}}
                    params={{}}
                    components={[]}
                />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app'))
} else {
  ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter
                routes={[]}
                location={{}}
                params={{}}
                components={[]}
            />
  </Provider>,
  document.getElementById('app'))
}
