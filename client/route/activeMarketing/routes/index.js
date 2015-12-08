import {
  A,
  B,
  APP,
  Nav,
} from '../containers/index'

const childRoutes = [
  {
    path: 'a',
    component: A,
  }
  ,
  {
    path: 'b',
    component: B,
  }
]

export default childRoutes
module.exports = childRoutes
