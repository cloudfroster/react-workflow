const initState = {
  userName: 'admin',
  isSignIn: true,
}

function user(state = initState, action) {
  switch(action.type) {
    case 'sign-in':
      return Object.assign({}, state, {isSignIn: true})
    case 'sign-out':
      return Object.assign({}, state, {isSignIn: false})
    default:
      return state
  }
}

export default user
