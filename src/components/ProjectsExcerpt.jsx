import React from 'react'
import {Link} from 'react-router-dom'

export default class ProjectsExcerpt extends React.Component {
  render () {
    return (
      <section className="excerpt-section">
        <Link to="/projects">
          <img src="/images/projects-image.jpg" alt="projects-image" />
        </Link>
        <Link className="nav-link" to="/projects">
          <h2>Projects</h2>
        </Link>
        <p>Check out some projects I've contributed to!</p>
      </section>
    )
  }
}
