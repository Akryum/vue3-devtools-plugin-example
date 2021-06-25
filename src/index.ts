import { setInterval } from 'timers'
import { reactive } from 'vue'
import { setupDevtools } from './devtools'

// Our plugin

export default {
  install (app, options = {}) {
    const data = reactive({
      message: 'hello',
      counter: 0
    })

    let devtools: ReturnType<typeof setupDevtools>

    app.mixin({
      computed: {
        $hello () {
          return data.message
        }
      },

      methods: {
        $doSomething () {
          const trackEnd = devtools ? devtools.trackStart('$doSomething') : null
          return new Promise(resolve => {
            setTimeout(() => {
              console.log('done')
              if (trackEnd) trackEnd()
              resolve('done')
            }, 1000)
          })
        }
      }
    })

    setInterval(() => {
      data.counter += 5
    }, 5000)

    if (process.env.NODE_ENV === 'development' || __VUE_PROD_DEVTOOLS__) {
      devtools = setupDevtools(app, data)
    }
  }
}
