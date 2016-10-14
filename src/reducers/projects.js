export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_PROJECTS':
      return action.receiveProjects
    default:
      return state
  }
}
