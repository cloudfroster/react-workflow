import React, { PropTypes, Component } from 'react'
import {Link, IndexLink} from 'react-router'
import {connect} from 'react-redux'
import style from './App.less'


let timeHander;

class App extends Component {

  constructor() {
    super()
  }

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
