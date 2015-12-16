export default {
  path: 'serviceCenter',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App').default)

    })
  },
}
