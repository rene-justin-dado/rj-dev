import React from 'react'

export default React.createClass({
  propTypes: {
    blogs: React.PropTypes.array.isRequired
  },
  render () {
    const qna = this.props.blogs.map((blog, i) => {
      const qnaList = blog.content.questions.map((question, j) => {
        const answer = blog.content.answers.filter((answer, k) => {
          return <p key={k}>{j === k}</p>
        })

        return (
          <div className="qna-pair">
            <h5 key={j}>{question}</h5>
            {answer}
          </div>
        )
      })
      return <div className="qna-list">{qnaList}</div>
    })
    return <div className="blog-qna">{qna}</div>
  }
})
