import request from 'superagent'

const url = 'http://localhost:3000'
const projV1 = '/v1/projects'
const blogV1 = '/v1/blogs'

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects: projects.map(project => project.data)
  }
}

export function getAllProjects (projects) {
  return (dispatch) => {
    request
      .get(`${url}${projV1}`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
        dispatch(receiveProjects(projects))
      })
  }
}

export const receiveBlogs = (blogs) => {
  return {
    type: 'RECEIVE_BLOGS',
    blogs
  }
}

export const getAllBlogs = () => {
  return (dispatch) => {
    request
      .get(`${url}${blogV1}`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
          dispatch(receiveBlogs(res.body.data))
      })
  }
}
