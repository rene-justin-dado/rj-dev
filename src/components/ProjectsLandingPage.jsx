import React from 'react'
import request from 'superagent'

const url = 'http://localhost:3000'

export default React.createClass({
  setInitialState () {
    return {
      projects: []
    }
  },
  componentWillMount () {
    request
      .get(`${url}/v1/projects`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! Something went wrong!')
          return
        }
        this.setState({
          projects: res.body.data
        })
      })
  },
  render () {
    const projects = this.state.projects.map((elem, i) => {
      return (
        <div key={i}>
          <p>{elem.projects.name}</p>
          <p>{elem.projects.github_link}</p>
          <p>{elem.projects.deployment_link}</p>
        </div>
      )
    })
    return (
      <div className='projects-landing-page'>
        {projects}
      </div>
    )
  }
})
