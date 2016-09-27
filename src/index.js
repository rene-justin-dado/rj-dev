import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import AboutPage from './containers/AboutPage'
import BlogsLandingPage from './containers/BlogsLandingPage'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blogs" component={BlogsLandingPage} />
    </Router>,
    document.getElementById('app')
  )
})
