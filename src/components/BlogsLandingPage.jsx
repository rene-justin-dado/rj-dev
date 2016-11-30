import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'

const proxy = 'https://crossorigin.me/',
      url = 'http://localhost:3000'

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
          <p>{elem.content}</p>
        </div>
      )
    })
    return (
      <div className="blogs-landing-page">
        <header>
          <Link to="/"><h5>Home</h5></Link>
          <h1>Blogs</h1>
        </header>
        <input type="text" placeholder="Name your new blog post" />
        {blogs}
        <Link className="cultural-blogs-link" to="/blogs/cultural">
          <h1>Cultural Blogs</h1>
        </Link>
      </div>
    )
  }
})
