import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import base from './theme/base.less'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import configureStore from './store/configureStore'

const store = window.store = configureStore()

ReactDOM.render((
  <div>
    <Provider store={store}>
      <ReduxRouter
                  routes={[]}
                  location={{}}
                  params={{}}
                  components={[]}
              />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
),document.getElementById('app'))

// must accept hot reload
if(module.hot) {
  module.hot.accept()
}

