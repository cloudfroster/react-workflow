import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
        <ul>
          <li><Link to='/activeMarketing/a'>a</Link></li>
          <li><Link to='/activeMarketing/b'>b</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav
