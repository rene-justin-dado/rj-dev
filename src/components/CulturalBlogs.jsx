import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import QnAList from './QnAList'

const proxy = 'https://crossorigin.me/',
      url = `${proxy}http://rj-dev-backend.herokuapp.com` || 'http://localhost:3000'

export default React.createClass({
  propTypes: {
    blogs: React.PropTypes.array
  },
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
    const blogs = this.state.blogs.map((blog, i) => {
      return (
        <div key={i} className="blog-info">
          <h5>{blog.category}</h5>
          <h4>{blog.title}</h4><br/>
          <h4>{blog.content.title}</h4><br/>
          {QnAList}
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
