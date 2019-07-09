import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import QnAList from './QnAList'
import config from '../config'

const url = config.url

export default class CategoryBlog extends React.Component {
  props: {
    blogs: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      blogs: []
    }
  },
  componentWillMount () {
    request
      .get(`${url}/v1/blogs/by/${this.props.params.category}`)
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
