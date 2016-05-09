import React, { PropTypes, Component } from 'react'
import {browserHistory} from 'react-router'

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  signIn(e) {
    //this.props.dispatch({type: 'sign-in'})
    browserHistory.push('/')
  }

	render() {
		return(
      <div className="SignIn">
        <div className="bar">
          <label htmlFor="username">username:</label><input type="text"/>
        </div>
        <div className="bar">
          <label htmlFor="password">password:</label><input type="password"/>
        </div>
        <button type="button" onClick={this.signIn.bind(this)}>Sign in</button>
      </div>
		)
	}

}

export default SignIn
