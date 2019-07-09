import React from 'react'

import SiteSearch from '../components/SiteSearch'
import DropDownNav from '../components/DropDownNav'

export default class WelcomeHeader extends React.Component {
  render () {
    return (
      <header className="welcome-header">
        <h1>RJDev</h1>
        <SiteSearch />
        <DropDownNav />
      </header>
    )
  }
}
