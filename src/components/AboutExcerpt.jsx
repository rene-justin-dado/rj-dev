import React from 'react'
import {Link} from 'react-router'

export default React.createClass ({
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/about">
          <img src="http://66.media.tumblr.com/4556bf0aac307297689a5d25e8f3cb77/tumblr_ml76r7I6OF1s1pua7o3_500.jpg" alt="placeholder zergling" />
        </Link>
        <Link className="about-page-link" to={'/about'}><h2>About</h2></Link>
        <p>This is some info about me!</p>
      </section>
    )
  }
})
