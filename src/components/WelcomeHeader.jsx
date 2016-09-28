import React from 'react'

import SiteSearch from '../components/SiteSearch'
import DropDownNav from '../components/DropDownNav'
import WelcomeMessage from '../components/WelcomeMessage'

export default React.createClass ({
  render () {
    return (
      <header className="welcome-header">
        <h1>Hello</h1>
        <SiteSearch />
        <DropDownNav />
        <WelcomeMessage />
        <hr />
      </header>
    )
  }
})
