import React from 'react'

export default React.createClass ({
  render () {
    return (
      <div className="about-page">
        <h1>So, here's a few things about me.</h1>
        <div className="likes">
          <h3>I love:</h3>
          <ul>
            <li>Tech and...</li>
            <li>Good Stories and...</li>
            <li>Good Company and...</li>
            <li>Sugar and...</li>
            <li>That melancholy feeling you get when you reminisce about past mistakes and realise that you've changed a lot since then.</li>
          </ul>
        </div>
        <div className="dislikes">
          <h3>I do <em>NOT</em> like:</h3>
          <ul>
            <li>Brocolli and...</li>
            <li>Being mean to puppies and...</li>
            <li>Sand getting in places it shouldn't be and...</li>
            <li>Public speaking and...</li>
            <li>People exercising their existing power to empower themselves as they disempower others.</li>
          </ul>
        </div>
        <img className="skills-icons" src="/images/express.png" alt="express-icon"/>
        <img className="skills-icons" src="/images/postgres.png" alt="postgres-icon"/>
        <img className="skills-icons" src="/images/react-redux.png" alt="react-redux-icon"/>
        <img className="skills-icons" src="/images/react-router.png" alt="react-router-icon"/>
        <img className="skills-icons" src="/images/react.png" alt="react-icon"/>
        <img className="skills-icons" src="/images/redux.png" alt="redux-icon"/>
        <img className="skills-icons" src="/images/webpack.png" alt="webpack-icon"/>
        <img className="skills-icons" src="/images/full-stack-javascript.png" alt="full-stack-javascript-icon"/>
      </div>
    )
  }
})
