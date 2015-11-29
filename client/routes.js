import React from 'react'
import {Router, IndexRoute, Route} from 'react-router'
import {
  App,
  Zdyx,
  About,
  Story,
  } from './containers/index';

export default () => {

  function requireAuth(nextState, replaceState) {
    if (false){
      replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
  }

  return (
    <Router>
        <Route path="/" component={App}>
          <Route onEnter={requireAuth}>
            <Route path="zdyx" component={Zdyx}></Route>
            <Route path="about" component={About}></Route>
            <Route path="story" component={Story}></Route>
          </Route>
        </Route>
    </Router>
  )
}
