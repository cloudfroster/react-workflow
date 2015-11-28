import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import base from './theme/base.less'
import Router from './routes'


ReactDOM.render((
	<Router />
),document.getElementById('app'));

// must accept hot reload
if(module.hot) {
	module.hot.accept();
}
