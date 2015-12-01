import React from 'react'
import App from './containers/App'
import childRoutes from './route/childRoutes'

const routes = {
  childRoutes: [
    {
      onEnter() {
        console.log('认证')
      },
      component: App,
      childRoutes,
    }
  ]
}

export default routes
