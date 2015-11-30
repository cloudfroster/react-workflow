const initState = {
  userName: 'admin marchen',
  isSignIn: true,
}

export default function user(state = initState, action) {
  switch(action.type) {
    case 'sign-in':
      return Object.assign({}, state, {isSignIn: true})
    case 'sign-out':
      return Object.assign({}, state, {isSignIn: false})
    default:
      return state
  }
}
