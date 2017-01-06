import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="blogs-landing-page">
        <header>
          <Link to="/"><h5>Home</h5></Link>
          <h1>Blogs</h1>
        </header>
        <Link className="cultural-blogs-link" to="/blogs/cultural">
          <h1>Cultural Blogs</h1>
        </Link>
      </div>
    )
  }
})
