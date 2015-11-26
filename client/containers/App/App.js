import React, { PropTypes, Component } from 'react'

import Box from '../../components/Box'

export default class App extends Component {

	static propTypes = {
		//children: PropTypes.element.isRequired,
		//error: PropTypes.object,
	}

	render() {
		return !this.props.error ? (
	      <div>
	        <h1 className="App-title">嗨!</h1>
	        <Box />
	      </div>
		) : this.props.children;
	}

}