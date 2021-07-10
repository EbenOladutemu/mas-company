import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/venobox/venobox.css'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
