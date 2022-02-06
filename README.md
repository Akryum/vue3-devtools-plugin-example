# Example Vue 3 plugin with devtools integration

Usage in app:

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyAwesomePlugin from 'my-awesome-plugin'

const app = createApp(App)
app.use(MyAwesomePlugin)
app.mount('#app')
```
