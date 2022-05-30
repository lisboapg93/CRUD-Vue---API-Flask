import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {axiosConfig} from './config/axios'

Vue.config.productionTip = false
axiosConfig(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
