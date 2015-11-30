import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import GlobalMenu from '../GlobalMenu'

class App extends Component {

	static propTypes = {
		//children: PropTypes.element.isRequired,
		//error: PropTypes.object,
	}
	render() {
		return(
      <div className="App">
        <GlobalMenu/>
        {this.props.children}
      </div>
		)
	}

}

export default connect((state) => {
  return {
    user : state.user,
  }
})(App)
