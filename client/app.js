import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import normalize from 'normalize.css'

ReactDOM.render((
	<App />
),document.getElementById('app'));

// must accept hot reload
if(module.hot) {
	module.hot.accept();
}
