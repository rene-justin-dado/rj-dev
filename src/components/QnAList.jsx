import React from 'react'

export default React.createClass({
  propTypes: {
    blogs: React.PropTypes.array.isRequired
  },
  render () {
    const qna = this.props.blogs.map((blog, i) => {
      const qnaList = blog.content.questions.map((question, j, qArr) => {
        const answer = blog.content.answers.filter((answer, k, aArr) => {
          return <p key={answer.substring(0, 9) || answer.substring(3, 10)}>{j === k}</p>
        })

        return (
          <div
            key={question.substring(0, 9) || question.substring(3, 10)}
            className="qna-pair">
            <h5><em>{question}</em></h5>
            {answer}
          </div>
        )
      })
      return <div
        key={i}
        className="qna-list">{qnaList}</div>
    })
    return <div className="blog-qna">{qna}</div>
  }
})
