const initState = {
  time: new Date().toLocaleTimeString(),
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
module.exports = dashboard
