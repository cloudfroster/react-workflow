import React, {Component}from 'react'
import {Router, browserHistory} from 'react-router'
import SignIn from './containers/SignIn'
import App from './containers/App'
import NotFound from './containers/NotFound'
import childRoutes from './route/childRoutes'

const routes = {
  childRoutes: [
    {
      path: '/signin',
      component: SignIn,
    },
    {
      onEnter(nextState, replace) {
        if(!window.store.getState().user.isSignIn) {
          replace('/signin')
        }
      },
      component: App,
      childRoutes,
    },
    {
      path: '*',
      component: NotFound,
    }
  ]
}

export default routes
