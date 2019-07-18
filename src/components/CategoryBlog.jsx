import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import QnAList from './QnAList'
import config from '../config'
import PropTypes from 'prop-types'

export default class CategoryBlog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  UNSAFE_componentWillMount () {
    request
    .get(`${config.url}/v1/blogs/by/${this.props.params.category}`)
    .end((err, res) => {
      if (err) {
        return
      }
      this.state({
        blogs: res.body.data
      })
    })
  }

  render () {
    const blogs = this.state.blogs.map((blog, i) => {
      return (
        <div key={blog.id} className="blog-info">
          <h4><em>{blog.title}</em></h4><br/>
          <h5><em>{blog.sub_title}</em></h5><br/>
          <QnAList
            blogs={this.state.blogs}
            url={url}
            blogId={blog.id}/>
        </div>
      )
    })
    return (
      <div className="cultural-blogs">
        <header>
          <h5><Link to="/blogs">Blog Landing</Link></h5>
        </header>
        {blogs}
      </div>
    )
  }
}

CategoryBlog.PropTypes = {
  blogs: PropTypes.object.isRequired
}
