import React, { PropTypes, Component } from 'react'

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

	render() {
		return(
      <div className="SignIn">
        Sign in
        {this.props.children}
      </div>
		)
	}

}

export default SignIn
