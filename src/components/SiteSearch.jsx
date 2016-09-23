import React from 'react'

export default React.createClass({
  props: {
    onClick: React.PropTypes.func.isRequired
  },

  render () {
    return (
      <input
        type="text"
        placeholder="Search the Site"
        onClick={
          (evt) => {
            if (evt.target.getAttribute("placeholder") === "Search the Site") {
              evt.target.setAttribute("placeholder", "clicked")
            } else {
              evt.target.setAttribute("placeholder", "Search the Site")
            }
          }
        }/>
    )
  }
})
