import React from 'react'

export default React.createClass({
  render () {
    return (
      <form id="blog_entry_form" action="/add/post/route">
        <label className="blog_entry">Category</label>
        <input type="text"/>
        <label className="blog_entry">Title</label>
        <input type="text"/>
        <label className="blog_entry">Sub-Title</label>
        <input type="text"/>
        <label className="blog_entry">Content</label>
        <textarea name='content_text_area'
                  rows='10'
                  cols='50'/>
        <button name="add_blog_entry"
                formMethod="post"
                value="add_blog_entry">
          Add Entry
        </button>
      </form>
    )
  }
})
