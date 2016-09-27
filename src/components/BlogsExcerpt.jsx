import React from 'react'
import {Link} from 'react-router'

export default React.createClass ({
  render () {
    return (
      <section>
        <img src="http://67.media.tumblr.com/2cc87f59e7ef460934cfd106a07db703/tumblr_msyezrMu2J1s1pua7o1_1280.png" alt="placeholder hy" />
        <Link className="blogs-landing-page-link" to={'/blogs'}>Blogs</Link>
        <p>Check out my blogs, where I talk about..... stuff!</p>
      </section>
    )
  }
})
