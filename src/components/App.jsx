import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import Excerpts from './Excerpts'
import WelcomeMessage from './WelcomeMessage'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WelcomeHeader />
        <hr/>
        <WelcomeMessage />
        <hr/>
        <Excerpts />
      </div>
    )
  }
})
