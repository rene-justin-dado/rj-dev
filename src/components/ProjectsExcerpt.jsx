import React from 'react'
import {Link} from 'react-router'

export default React.createClass ({
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/projects">
          <img src="http://66.media.tumblr.com/3d7038d69d29fd059404629d616e93b6/tumblr_mqnbjkIKDi1s1pua7o1_1280.png" alt="placeholder infestor" />
        </Link>
        <Link component="" to="/projects"><h2>Projects</h2></Link>
        <p>Check out some projects I've contributed to!</p>
      </section>
    )
  }
})
