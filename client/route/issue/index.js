module.exports = {
  path: 'issue',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App'))

    })
  },
}
