import request from 'superagent'
import config from '../config'

export const getBlogsByCategory = (category) => {
  return (dispatch) => {
    request
      .get(`${config.url}/v1/blogs/by/${category}`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
        dispatch(receiveBlogs(res.body.data))
      })
  }
}

export const receiveBlogs = (blogs) => {
  return {
    type: 'RECEIVE_BLOGS',
    blogs: blogs
  }
}

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects: projects.map(project => project.data)
  }
}

export const getAllProjects = (projects) => {
  return (dispatch) => {
    request
      .get(`${config.url}/v1/projects`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
        dispatch(receiveProjects(projects))
      })
  }
}
