import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'

class NotFound extends Component {

  render() {

    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <div>404 not found</div>
          <Link to="/signin">Sign in</Link>
        </div>
      </div>
    )
  }
}

export default NotFound
