import React, { PropTypes, Component } from 'react'

export default class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div>
        joinMarketing
        {this.props.children}
      </div>
		)
	}

}

module.exports = App
