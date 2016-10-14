import request from 'superagent'

const url = 'http://localhost:3000'

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects: projects.map(project => project.data)
  }
}

export function getAllProjects () {
  return () => {
    return request
      .get(`https://crossorigin.me/${url}/v1/projects`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! There was a problem!')
        }
        dispatch(receiveProjects())
      })
  }
}
