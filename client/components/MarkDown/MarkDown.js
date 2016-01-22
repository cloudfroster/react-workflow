import React, { PropTypes, Component } from 'react'
import marked from 'marked'

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

  constructor(props) {
    super(props)
  }

  rawMarkup() {
    return {
      __html: marked(this.props.children, this.props.option)
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
