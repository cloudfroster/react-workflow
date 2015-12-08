import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import style from './App.less'

class App extends Component {

	static propTypes = {
	}

  constructor() {
    super()
    this.state = {
      welcome : 'welcome',
    }
  }

  componentWillUnmount() {
    console.log()
  }

  clickHandle(e) {
    //setInterval(() => {window.store.dispatch({type:'TIME'})},1000)
    $TIME()
  }

	render() {

    const {time} = this.props

		return(
      <div>
        <h1>{this.state.welcome}</h1>
        <h2>{time}</h2>
        <div className='start-time' onClick={this.clickHandle.bind(this)}>间</div>
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
