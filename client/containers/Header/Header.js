import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'
import styles from './Header.less'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {dispatch} = this.props

    return (
      <header className='Header'>
        <Link to="/" className="Header-logo"></Link>
      </header>
    )
  }
}

export default Header
