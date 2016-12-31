import React from 'react'

export default React.createClass({
  // props: {
  //   getBlogs: React.PropTypes.Object.isRequired
  // },
  render () {
    const qnaList = blog.content.questions.map((qna, i) => {
      const answers = blog.content.answers.map((answer, j) => {
        return i === j
      })
      return (
        <div key={i} className="qna-list">
          <h5>{blog.content.questions[i]}</h5><br/>
          <p>{answers}</p>
        </div>
      )
    })
  }
})
