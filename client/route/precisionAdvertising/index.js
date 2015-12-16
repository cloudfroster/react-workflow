export default {
  path: 'precisionAdvertising',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App').default)

    })
  },
}
