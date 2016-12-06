import React from 'react'

export default React.createClass({
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown">Navigate</a>
            <ul className="dropdown-menu">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})
