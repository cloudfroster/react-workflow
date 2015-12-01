import React, { PropTypes, Component } from 'react'

export default class App extends Component {

	static propTypes = {
	}

  constructor() {
    super()
    this.state = {
      welcome : 'welcome',
    }
  }

  clickHandle = () => {
    /* alert(this.state.welcome) */
  }

	render() {

		return(
      <div>
        <h1>{this.state.welcome}</h1>
        <div onClick={this.clickHandle}></div>
        {this.props.children}
      </div>
		)
	}

}

module.exports = App
