import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import style from './App.less'


let timeHander;

class App extends Component {

	static propTypes = {
	}

  constructor() {
    super()
    this.state = {
      welcome : 'welcome',
    }
    timeHander = null;
    window.store.dispatch({type:'TIME'})
  }

  componentWillUnmount() {
    clearInterval(timeHander)
  }

  clickHandle(e) {
    clearInterval(timeHander)
    timeHander = setInterval(() => {window.store.dispatch({type:'TIME'})},1000)
  }

	render() {

    const {time} = this.props

		return(
      <div className="dashboard-container">
        <h1>{this.state.welcome}</h1>
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
  }
})(App)

export default App
module.exports = App
