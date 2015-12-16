import React, { PropTypes, Component } from 'react'

class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div>
        changePassword
        {this.props.children}
      </div>
		)
	}

}

export default App
