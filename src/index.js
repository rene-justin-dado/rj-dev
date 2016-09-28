import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
import App from './components/App'
import AboutPage from './components/AboutPage'
import BlogsLandingPage from './components/BlogsLandingPage'
import CulturalBlogs from './components/CulturalBlogs'

const store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blogs" component={BlogsLandingPage} />
        <Route path="/blogs/cultural" component={CulturalBlogs} />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
