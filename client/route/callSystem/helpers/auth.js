export let loginState = false

export function logIn() {
  loginState = true;
}

export function logOut(nextState, replaceState) {
    loginState = false
    replaceState(null, '/login')
}

export function check(nextState, replaceState) {
    if(!loginState) {
      alert('你还没有登录, 请登录')
      replaceState({nextPathName: nextState.location.pathName}, '/login')
    }
    if(loginState && nextState.location.pathName === '/login') {
      alert('你已经登录, 将跳转到dashboard页面')
      replaceState({nextPathName: nextState.location.pathName}, '/')
    }
  }
