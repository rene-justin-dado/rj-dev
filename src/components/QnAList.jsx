import React from 'react'
import request from 'superagent'

export default class QnAList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      qna: []
    }
  }

  UNSAFE_componentWillMount () {
    request
      .get(`${this.props.url}/v1/blogs/qna`)
      .end((err, res) => {
        if (err) {
          return
        }
        this.state({
          qna: res.body.data
        })
      })
  }

  render () {
    const qnaList = this.state.qna.map((qnaPair, i) => {
      if (this.props.blogId === qnaPair.blog_id) {
        return (
          <div key={this.props.blogId - i} className="qna-list">
            <h5><b>{qnaPair.question}</b></h5>
            <p>{qnaPair.answer}</p>
          </div>
        )
      }
    })
    return <div className="qna-list-container">{qnaList}</div>
  }
}

QnAList.propTypes = {
  blogs: React.PropTypes.array.isRequired,
  blogId: React.PropTypes.number.isRequired,
  url: React.PropTypes.string.isRequired
}
