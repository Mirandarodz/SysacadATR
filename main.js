import routes from './routes.js'
import App from './App.js'

new Vue({
  el: '#app',
  template: '<App/>',
  router: new VueRouter({routes}),
  mounted: function () {
    this.$vuetify.theme.primary = '#4971FA';
    this.$vuetify.theme.secondary = '#4ac4a9';
  },
  components: {
    App,
  },
})