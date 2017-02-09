import React from 'react'
import {connect} from 'react-redux'

import BlogsLandingPage from '../components/BlogsLandingPage'
import {getBlogsByCategory} from '../actions'

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    blogs: (category) => {
      dispatch(getBlogsByCategory(category))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsLandingPage)
