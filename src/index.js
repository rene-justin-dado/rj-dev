import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './components/App'
import ProjectsLandingPage from './components/ProjectsLandingPage'
import BlogsContainer from './containers/BlogsContainer'
import BlogEntryForm from './components/BlogEntryForm'
import AboutPage from './components/AboutPage'
import CategoryBlog from './components/CategoryBlog'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router basename="/">
      <Route exact path="/" component={App} />
      <Route path="/projects" component={ProjectsLandingPage} />
      <Route path="/blogs" component={BlogsContainer} />
      <Route path="/blogs/by/:category" component={CategoryBlog} />
      <Route path="/blogs/add/by/:category" component={BlogEntryForm} />
      <Route path="/about" component={AboutPage} />
    </Router>,
    document.getElementById('app')
  )
})
