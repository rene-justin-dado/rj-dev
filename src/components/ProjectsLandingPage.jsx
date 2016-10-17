import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'

const proxy = 'https://crossorigin.me/',
      url = `${proxy}http://rj-dev-backend.herokuapp.com` || 'http://localhost:3000'

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
          <em><strong><h5>{elem.name}</h5></strong></em>
          <a href={elem.github_link}>
            <img src={`images/octocats/${Math.abs(9 - i)}.png`}
                 alt="octocat"
                 height="100px"
                 width="100px"/>
             Github Link
          </a>
          <br/>
          <h5>
            <a href={elem.deployment_link || elem.github_link}>
              {elem.deployment_link || "Nothing but Github"}
            </a>
          </h5>
        </div>
      )
    })
    return (
      <div className='projects-landing-page'>
        <header>
          <Link to="/"><h5>Home</h5></Link>
          <h1>Here's some projects I've contributed to.</h1>
        </header>
        {projects}
      </div>
    )
  }
})
