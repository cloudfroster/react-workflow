import React, { PropTypes, Component } from 'react'
import Nav from '../Nav'

export default class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div>
        <Nav />
        {this.props.children || <div>activeMarketing index</div>}
      </div>
		)
	}

}

module.exports = App
