import React from 'react'
import BlogsLandingPage from '../components/BlogsLandingPage'
import {connect} from 'react-redux'
import {getAllBlogs} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => dispatch(getAllBlogs)
  }
}

export default connect(null, mapDispatchToProps)(BlogsLandingPage)
