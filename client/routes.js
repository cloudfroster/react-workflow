import React from 'react'
import {Router, IndexRoute, Route} from 'react-router'
import App from './containers/App'
import {loginState, logOut, check} from './helpers/auth'

const routes = {
  childRoutes: [{
    path: '/login',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Login'))
      })
    },
  }, {
    path: '/logout',
    onEnter: logOut,
  }, {
    onEnter: check,
    path: '/',
    component: App,
    childRoutes: [{
      path: 'zdyx',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Zdyx'))
        })
      },
    }, {
      path: 'about',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/About'))
        })
      },
    }, {
      path: 'story',
      getComponent(location, cb) {
        cb(null, require('./containers/Story'))
      },
    }, ],
  }, ]
}

export default routes
