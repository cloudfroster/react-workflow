import React, { PropTypes, Component } from 'react';
import style from './Layout.css';
class Layout extends Component {

  static propTypes = {
    //children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <h1 className="Layout-title">HELLO WORLD</h1>
      </div>
    ) : this.props.children;
  }

}

export default Layout;
