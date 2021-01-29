import { computed, reactive } from 'vue'

// Our plugin

export default {
  install (app, options = {}) {
    const data = reactive({
      message: 'hello',
    })

    app.mixin({
      computed: {
        $hello () {
          return data.message
        }
      }
    })
  }
}
