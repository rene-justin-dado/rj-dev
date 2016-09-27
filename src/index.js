import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import AboutPage from './components/AboutPage'
import BlogsLandingPage from './components/BlogsLandingPage'
import CulturalBlogs from './components/CulturalBlogs'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blogs" component={BlogsLandingPage} />
      <Route path="/blogs/cultural" component={CulturalBlogs} />
    </Router>,
    document.getElementById('app')
  )
})
