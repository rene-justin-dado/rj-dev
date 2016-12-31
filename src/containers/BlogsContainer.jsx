import React from 'react'
import {connect} from 'react-redux'

import CulturalBlogs from '../components/CulturalBlogs'
import {getAllBlogs} from '../actions'

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => {
      dispatch(getAllBlogs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CulturalBlogs)
