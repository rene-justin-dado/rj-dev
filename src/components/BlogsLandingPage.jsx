import React from 'react'
import {Link} from 'react-router'

export default class BlogsLandingPage extends React.Component {
  render () {
    return (
      <div className="blogs-landing-page">
        <header>
          <Link to="/"><h3>Home</h3></Link>
          <h1>Blogs</h1>

            <nav className="navbar">
              <div className="container-fluid">
                <div className="dropdown">
                  <a className="dropdown-toggle nav-link" data-toggle="dropdown"><h3>Add a blog</h3></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/blogs/add/by/:category">Generic Blog Entry</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>

        <Link className="cultural-blogs-link" to="/blogs/by/EDA culture">
          <h1>Cultural Blogs</h1>
        </Link>
        <Link className="technical-blogs-link" to="/blogs/by/Technical Skills">
          <h1>Technical Blogs</h1>
        </Link>
      </div>
    )
  }
}
