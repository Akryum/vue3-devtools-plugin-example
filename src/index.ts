// Our plugin

export default {
  install (app, options = {}) {
    app.mixin({
      computed: {
        $hello () {
          return 'hello'
        }
      }
    })
  }
}
