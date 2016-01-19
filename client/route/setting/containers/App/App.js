import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import style from './App.less'

class App extends Component {

  constructor() {
    super()
  }

	render() {

    const {time, welcome} = this.props

		return(
      <div className="setting-container">
        <h1>setting</h1>
        {this.props.children}
      </div>
		)
	}

}

export default App
