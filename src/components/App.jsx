import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import Excerpts from './Excerpts'
import WelcomeMessage from './WelcomeMessage'

export default function App () {
  return (
    <div className='app-container'>
      <WelcomeHeader />
      <WelcomeMessage />
      <Excerpts />
    </div>
  )
}
