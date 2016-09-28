export default (state = {}, action) => {
  switch (action.type) {
    case "REDUCER":
      return action.user
    default:
      return state
  }
}
