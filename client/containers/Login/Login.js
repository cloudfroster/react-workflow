import React, { PropTypes, Component } from 'react'
import {logIn} from '../../helpers/auth'
import {History} from 'react-router'
import reactMixin from 'react-mixin'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login(){
    logIn()
    this.history.replaceState(null, '/')
  }

	render() {
		return(
      <div className="Login">
      登录或者注册
      用户名: <input type="text"/><br/>
      密码: <input type="password" name="" id="" /><br/>
      <input type="submit" value="登录" onClick={this.login} />
      </div>
		)
	}
}

reactMixin.onClass(Login, History);

module.exports = Login;
