module.exports = {
  path: 'activeMarketing',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App'))

    })
  },
  getChildRoutes: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./routes'))
    })
  }
}
