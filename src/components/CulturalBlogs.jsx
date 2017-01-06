import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import QnAList from './QnAList'

const proxy = 'https://crossorigin.me/',
      url = 'http://rj-dev-backend.herokuapp.com' || 'http://localhost:3000'

export default React.createClass({
  getInitialState () {
    return {
      blogs: []
    }
  },
  componentWillMount () {
    request
      .get(`${proxy}${url}/v1/blogs`)
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
        <div key={blog.id} className="blog-info">
          <h4><em>{blog.title}</em></h4><br/>
          <QnAList
            blogs={this.state.blogs}
            proxy={proxy}
            url={url}
            blogId={blog.id}/>
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
