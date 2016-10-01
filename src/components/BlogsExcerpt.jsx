import React from 'react'
import {Link} from 'react-router'

export default React.createClass ({
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/blogs">
          <img src="http://67.media.tumblr.com/2cc87f59e7ef460934cfd106a07db703/tumblr_msyezrMu2J1s1pua7o1_1280.png" alt="placeholder hy" />
        </Link>
        <Link className="blogs-landing-page-link" to={'/blogs'}><h2>Blogs</h2></Link>
        <p>Check out my blogs, where I talk about..... stuff!</p>
      </section>
    )
  }
})
