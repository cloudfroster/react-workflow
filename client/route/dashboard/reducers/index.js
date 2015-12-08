const initState = {
  time: new Date().toString(),
}

function dashboard(state = initState, action) {

  switch(action.type) {
    case 'TIME':
    console.log(1)
    return Object.assign({}, state, {time: new Date().toString()})
    default:
    return state
  }

}

export default dashboard
module.exports = dashboard
