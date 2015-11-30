import React, { PropTypes, Component } from 'react'

export default class SignIn extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div className="SignIn">
        登陆界面
        {this.props.children}
      </div>
		)
	}

}

module.exports = SignIn
