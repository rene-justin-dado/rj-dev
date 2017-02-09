const initState = [
  {
    id: 0,
    category: '',
    title: '',
    sub_title: ''
  },
  {
    id: 1,
    category: '',
    title: '',
    sub_title: ''
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_BLOGS':
      return action.blogs
    default:
      return state
  }
}
