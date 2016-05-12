import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'

class NotFound extends Component {

  constructor(props) {
    super(props)
  }

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
