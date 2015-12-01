import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import GlobalMenu from '../GlobalMenu'

class App extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
    this.state = {}
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
