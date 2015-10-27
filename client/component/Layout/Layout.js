import React, { PropTypes, Component } from 'react';

class Layout extends Component {

  static propTypes = {
    //children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    ) : this.props.children;
  }

}

export default Layout;
