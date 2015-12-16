import React, { PropTypes, Component } from 'react'
import style from './App.less'
import Nav from '../Nav'

class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div className="activeMarketing-container">
        <Nav />
        {this.props.children || <div>activeMarketing index</div>}
      </div>
		)
	}

}

export default App
