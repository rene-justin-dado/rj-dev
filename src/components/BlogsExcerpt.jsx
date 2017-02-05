import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
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
})
