import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import Excerpts from './Excerpts'

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
