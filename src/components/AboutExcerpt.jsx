import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/about">
          <img src="/images/about-image.jpeg" alt="about-image" />
        </Link>
        <Link className="nav-link" to={'/about'}>
          <h2>About</h2>
        </Link>
        <p>This is some info about me!</p>
      </section>
    )
  }
})
