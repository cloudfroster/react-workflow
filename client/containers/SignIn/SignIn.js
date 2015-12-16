import React, { PropTypes, Component } from 'react'

class SignIn extends Component {

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
      <div className="SignIn">
        登陆界面
        {this.props.children}
      </div>
		)
	}

}

export default SignIn
