module.exports = {
  path: 'dataManagement',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App'))

    })
  },
}
