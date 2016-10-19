import React from 'react'

export default React.createClass({
  props: {
    onClick: React.PropTypes.func.isRequired
  },

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
})
