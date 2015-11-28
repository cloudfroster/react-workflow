import React from 'react';
import {Router, IndexRoute, Route} from 'react-router';
import {
  App,
  Zdyx,
  About,
  Story,
  } from './containers/index';

export default () => {
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="zdyx" component={Zdyx}></Route>
        <Route path="about" component={About}></Route>
        <Route path="story" component={Story}></Route>
      </Route>
    </Router>
  )
}
