const initState = {
  time: new Date().toLocaleTimeString(),
  welcome: 'welcome, this is a large app!, all code is incremental loading.',
}

function dashboard(state = initState, action) {

  switch(action.type) {

    case 'TIME':
    return Object.assign({}, state, {time: new Date().toLocaleTimeString()})

    default:
    return state

  }
}

export default dashboard
