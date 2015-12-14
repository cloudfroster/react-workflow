import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import style from './App.less'


let timeHander;

class App extends Component {

	static propTypes = {
	}

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
        <h1>{welcome}</h1>
        <h2>{time}</h2>
        <button className='start-time' onClick={this.clickHandle.bind(this)}>点击开始计时</button>
        {this.props.children}
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
module.exports = App
