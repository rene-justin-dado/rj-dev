import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="welcome-message">
        <h2>Welcome to my site!</h2>
        <div className="welcome-content">
          <p>Hi! I'm Justin and you've made it to my site.<br/>
          Who am I, you ask? Take a look around,<br/>
        Explore a bit and you'll find out a bit about me.<br/>
          </p>
          <section className="emphasize">Read a bit about this site
            <a href="https://github.com/rene-justin-dado/rj-dev/blob/master/README.md">
              here
            </a>
          </section>
        </div>
      </div>
    )
  }
})
