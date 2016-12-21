import React, { PropTypes, Component } from 'react'
import {Link, IndexLink, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import style from './App.less'
import MarkDown from 'MarkDown'
import rawMarkdown from './markdown.md'

let timeHander

class App extends Component {

  componentWillUnmount() {
    clearInterval(timeHander)
  }

  clickHandle(e) {
    clearInterval(timeHander)
    timeHander = setInterval(() => {window.store.dispatch({type:'TIME'})},1000)
  }

	render() {

    const {time, welcome} = this.props

		return(
      <div className="dashboard-container">
        <div className="dashboard-banner">
          <div className="dashboard-tip">welcome</div>
          <div className="dashboard-title">DASHBOARD</div>
        </div>
        <MarkDown>
        {rawMarkdown}
        </MarkDown>
      </div>
		)
	}

}

App  = connect((state) => {
  return {
    time : state.dashboard.time,
    welcome : state.dashboard.welcome,
  }
})(App)

export default App
