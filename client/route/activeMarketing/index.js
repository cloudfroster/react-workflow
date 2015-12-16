export default {
  path: 'activeMarketing',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App').default)

    })
  },
  getChildRoutes: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./routes').default)
    })
  }
}
