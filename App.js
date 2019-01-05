const template = `
  <div>
    <AppLayout v-if="sesionIniciada" />
    <Login v-else @login="sesionIniciada = true" />
  </div>
`

import AppLayout from './components/AppLayout.js'
import Login from './components/Login.js'

export default {
  name: 'App',
  template,
  data: () => ({
      sesionIniciada: false,
    }),
  components: {
    AppLayout,
    Login,
  },
}
