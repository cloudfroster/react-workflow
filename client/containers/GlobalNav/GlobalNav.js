import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'

export default class GlobalNav extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ul>
        <li><IndexLink to="/" activeStyle={{color:'red'}}>首页</IndexLink></li>
        <li><Link to="/zdyx" activeStyle={{color:'red'}}>主动营销</Link></li>
        <li><Link to="/about" activeStyle={{color:'red'}}>关于我们</Link></li>
        <li><Link to="/story" activeStyle={{color:'red'}}>发生的故事</Link></li>
      </ul>
    )
  }
}
