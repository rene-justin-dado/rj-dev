import React from 'react'
import config from '../config'

const url = config.url

export default React.createClass({
  render () {
    return (
      <form id="blog_entry_form"
            action={`${url}/v1/blogs/add/by/:category/post`}
            method="post">
        <label className="blog_entry">Category</label>
        <input type="text"
               name="category"/>
        <label className="blog_entry">Title</label>
        <input type="text"
               name="title"/>
        <label className="blog_entry">Sub-Title</label>
        <input type="text"
               name="sub_title"/>
        <label className="blog_entry">Content</label>
        <textarea name='content'
                  rows='10'
                  cols='50'/>
        <button name="add_blog_entry"
                value="add_blog_entry">
          Add Entry
        </button>
      </form>
    )
  }
})
