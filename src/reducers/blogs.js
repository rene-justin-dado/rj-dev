const initState = [
  {
    id: 0,
    category: "",
    title: "",
    content: {}
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
