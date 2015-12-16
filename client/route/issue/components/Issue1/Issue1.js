import React, { PropTypes, Component } from 'react'
import style from './Issue1.less'

class Issue1 extends Component {

	static propTypes = {

	}

	static defaultProps = {

	}

	constructor(props) {
		super(props)
	}

  changeHandle() {
    this._name.value = this._name.value
  }

	render() {
		return (
			<div>
        <h1>react常见的问题</h1>
        <h2>1.input onchange事件集合了input等事件. 只要input里面的内容改变了,就会触发.如下:</h2>
        {/* 重现问题 */}
        name: <input type="text" defaultValue="marry" placeholder="input your name" onChange={this.changeHandle.bind(this)} ref={(node) => this._name = node}/>
      </div>
		)
	}

}

export default Issue1
