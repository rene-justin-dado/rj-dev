import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'

const proxy = 'https://crossorigin.me/',
      url = 'http://localhost:3000' || `${proxy}rj-dev-backend.herokuapp.com`

export default React.createClass({
  getInitialState () {
    return {
      blogs: []
    }
  },
  componentWillMount () {
    request
      .get(`${url}/v1/blogs`)
      .end((err, res) => {
        if (err) {
          return
        }
        this.setState({
          blogs: res.body.data
        })
      })
  },
  render () {
    const blogs = this.state.blogs.map((elem, i) => {
      return (
        <div key={i} className="blog-info">
          <h5>{elem.category}</h5>
          <h4>{elem.title}</h4>
          {elem.content}
        </div>
      )
    })
    return (
      <div className="cultural-blogs">
        <h5><Link to="/blogs">Blog Landing</Link></h5>
        {blogs}
      </div>
    )
  }
})
