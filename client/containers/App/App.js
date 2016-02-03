import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import styles from './App.less'
import Header from '../Header'
import GlobalMenu from '../GlobalMenu'

class App extends Component {

  constructor(props) {
    super(props)
  }

	render() {
		return(
      <div className="App">
        <Header />
        <GlobalMenu />
        <div className="App-children">
          {this.props.children}
        </div>
      </div>
		)
	}

}

export default App
