import React from 'react'

import AboutExcerpt from '../components/AboutExcerpt'
import BlogsExcerpt from '../components/BlogsExcerpt'
import ProjectsExcerpt from '../components/ProjectsExcerpt'

export default class Excerpts extends React.Component {
  render () {
    return (
      <section className="excerpts-container">
        <ProjectsExcerpt />
        <BlogsExcerpt />
        <AboutExcerpt />
      </section>
    )
  }
}
