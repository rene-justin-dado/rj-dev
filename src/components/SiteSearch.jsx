import React from 'react'

export default class SiteSearch extends React.Component {
  render () {
    return (
      <input
        id="site-search"
        name="site-search"
        type="text"
        placeholder="Search is not yet available"
        size="30"
        onClick={(evt) => console.log(evt.target)}
        />
    )
  }
}
