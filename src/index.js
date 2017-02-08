import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './components/App'
import ProjectsLandingPage from './components/ProjectsLandingPage'
import BlogsLandingPage from './components/BlogsLandingPage'
import CulturalBlogs from './components/CulturalBlogs'
import AboutPage from './components/AboutPage'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/projects" component={ProjectsLandingPage} />
        <Route path="/blogs" component={BlogsLandingPage} />
        <Route path="/blogs/by/:category" component={CulturalBlogs} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
