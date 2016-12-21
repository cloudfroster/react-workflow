import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'
import style from './GlobalMenu.less'

class GlobalMenu extends Component {

  render() {

    const {dispatch, user} = this.props

    return(
      <nav className='GlobalMenu'>
          <ul>
            <li><Link to="/" activeClassName='GlobalMenu-active' className="icon dashboard"></Link></li>
            <li><Link to="/user" activeClassName='GlobalMenu-active' className="icon user"></Link></li>
            <li><Link to="/setting" activeClassName='GlobalMenu-active' className="icon setting"></Link></li>
          </ul>
      </nav>
    )
  }
}

export default GlobalMenu
