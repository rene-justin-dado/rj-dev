import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import AboutPage from './components/AboutPage'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={AboutPage} />
    </Router>,
    document.getElementById('app')
  )
})
