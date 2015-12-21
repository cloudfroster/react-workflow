import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'
import style from './GlobalMenu.less'
import {connect} from 'react-redux'

class GlobalMenu extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    const {dispatch, user} = this.props;
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

GlobalMenu = connect((state) => {
  return {
    router: state.router,
    user: state.user,
  }
})(GlobalMenu)

export default GlobalMenu
