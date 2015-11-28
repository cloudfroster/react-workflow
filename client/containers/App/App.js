import React, { PropTypes, Component } from 'react'
import Box from '../../components/Box'
import GlobalNav from '../GlobalNav'

export default class App extends Component {

	static propTypes = {
		//children: PropTypes.element.isRequired,
		//error: PropTypes.object,
	}

	render() {
		return(
      <div className="App">
        <GlobalNav></GlobalNav>
        {this.props.children || <div> dashboard</div>}
      </div>
		)
	}

}
