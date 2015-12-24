import React, {PropTypes, Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import AppBar from 'material-ui/lib/app-bar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Root extends Component {

	render() {
		return (
      <div>
        <h1 className="title">React-workflow UI Components</h1>
        <div className="main">
          <div className="AppBar box">
            <h3>AppBar</h3>
            <AppBar title="title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </div>
        </div>
      </div>
		)
	}

}

export default Root
