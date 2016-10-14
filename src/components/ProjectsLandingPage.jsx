import React from 'react'
import request from 'superagent'

const url = 'http://localhost:3000'

export default React.createClass({
  getInitialState () {
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
        <div key={i} className="project-info">
          <p>{elem.name}</p>
          <a href={elem.github_link}>Github Code</a>
          <br/>
          <a href={elem.deployment_link}>Deployed Site</a>
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
