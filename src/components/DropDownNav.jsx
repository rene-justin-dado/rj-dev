import React from 'react'
import {Link} from 'react-router'

export default class DropDownNav extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="dropdown">
            <a className="dropdown-toggle nav-link" data-toggle="dropdown"><h3>The Wayfinder</h3></a>
            <ul className="dropdown-menu">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="blogs">Blogs</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
