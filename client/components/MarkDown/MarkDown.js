import React, { PropTypes, Component } from 'react'
import marked from 'marked'
import highlightCss from 'highlight.js/styles/xcode.css'

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

class MarkDown extends Component {

	static propTypes = {
    option: PropTypes.object,
    children: PropTypes.string,
	};

	static defaultProps = {
    option: {
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    },
    children: '',
	};

  rawMarkup() {
    return {
      __html: marked(this.props.children)
    }
  }

	render() {
		return (
      <div dangerouslySetInnerHTML={this.rawMarkup()}>
      </div>
		)
	}

}

export default MarkDown
