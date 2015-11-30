import React, { PropTypes, Component } from 'react'
import GlobalMenu from '../GlobalMenu'

export default class App extends Component {

	static propTypes = {
		//children: PropTypes.element.isRequired,
		//error: PropTypes.object,
	}
	render() {
		return(
      <div className="App">
        <GlobalMenu />
        {this.props.children}
      </div>
		)
	}

}

module.exports = App
