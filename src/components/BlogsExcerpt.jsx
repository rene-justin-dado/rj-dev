import React from 'react'
import {Link} from 'react-router-dom'

export default class BlogsExcerpt extends React.Component {
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/blogs">
          <img src="/images/blogs-image.png" alt="blogs-image" />
        </Link>
        <Link className="nav-link" to="/blogs">
          <h2>Blogs</h2>
        </Link>
        <p>Check out my blogs, where I talk about..... stuff!</p>
      </section>
    )
  }
}
