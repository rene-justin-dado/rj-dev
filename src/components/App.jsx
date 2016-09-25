import React from 'react'
import WelcomeHeader from '../containers/WelcomeHeader'
import Excerpts from '../containers/Excerpts'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WelcomeHeader />
        <Excerpts />
      </div>
    )
  }
})
