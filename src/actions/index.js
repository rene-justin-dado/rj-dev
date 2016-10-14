import request from 'superagent'

const url = 'http://localhost:3000'
const proj1 = '/v1/projects'

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects: projects.map(project => project.data)
  }
}

export function getAllProjects (projects) {
  return (dispatch) => {
    return request
      .get(`https://crossorigin.me/${url}${proj1}`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
        dispatch(receiveProjects(projects))
      })
  }
}
