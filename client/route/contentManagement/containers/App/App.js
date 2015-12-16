import React, { PropTypes, Component } from 'react'

class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div>
        contentManagement
        {this.props.children}
      </div>
		)
	}

}

export default App
