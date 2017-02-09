import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'
import config from '../config'

export default React.createClass({
  getInitialState () {
    return {
      projects: []
    }
  },
  componentWillMount () {
    request
      .get(`${config.url}/v1/projects`)
      .end((err, res) => {
        if (err) {
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
          <em><strong><h3>{elem.name}</h3></strong></em>
          <h3><a href={elem.github_link}>
            <img src={`images/octocats/${Math.abs(9 - i)}.png`}
                 alt="octocat"
                 height="100px"
                 width="100px"/>
             Github Link
          </a></h3>
          <br/>
          <h3>
            <a href={elem.deployment_link || elem.github_link}>
              {elem.deployment_link || 'Nothing but Github'}
            </a>
          </h3>
        </div>
      )
    })
    return (
      <div className='projects-landing-page'>
        <header>
          <Link to="/"><h3>Home</h3></Link>
          <h1>Here's some projects I've contributed to.</h1>
        </header>
        {projects}
      </div>
    )
  }
})
