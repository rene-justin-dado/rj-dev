import React from 'react'

import SiteSearch from '../components/SiteSearch'
import DropDownNav from '../components/DropDownNav'

export default React.createClass ({
  render () {
    return (
      <header className="welcome-header">
        <h1>Hello</h1>
        <SiteSearch />
        <DropDownNav />
      </header>
    )
  }
})
