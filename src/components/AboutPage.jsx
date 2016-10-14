import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="about-page">

        <h1>Here's some technologies I have experience with.</h1>
        <div className="technical-skills">
          <div id="full-stack-javascript-icon">
            <img className="skills-icons" src="/images/full-stack-javascript.png" alt="full-stack-javascript-icon"/>
            <h4>full stack javascript</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/express.png" alt="express-icon"/>
            <h4>express</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/postgres.png" alt="postgres-icon"/>
            <h4>postgres</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/react-redux.png" alt="react-redux-icon"/>
            <h4>react-redux</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/react-router.png" alt="react-router-icon"/>
            <h4>react-router</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/react.png" alt="react-icon"/>
            <h4>react</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/redux.png" alt="redux-icon"/>
            <h4>redux</h4>
          </div>
          <div>
            <img className="skills-icons" src="/images/webpack.png" alt="webpack-icon"/>
            <h4>webpack</h4>
          </div>
        </div>
      <hr/>
        <h1>And, here's a few things about me.</h1>
        <div className="personal">
          <div className="personal-lists">
            <h3>I love:</h3>
            <ul>
              <li>Tech and...</li>
              <li>Good Stories and...</li>
              <li>Good Company and...</li>
              <li>Sugar and...</li>
              <li>That melancholy feeling you get when you reminisce about past mistakes and realise that you've changed a lot since then.</li>
            </ul>
          </div>
          <div className="personal-lists">
            <h3>I do <em>NOT</em> like:</h3>
            <ul>
              <li>Brocolli and...</li>
              <li>Being mean to puppies and...</li>
              <li>Sand getting in places it shouldn't be and...</li>
              <li>Public speaking and...</li>
              <li>People exercising their existing power to empower themselves as they disempower others.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
