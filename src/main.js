import Vue from 'vue'
import App from './App'
import router from './router'
import font from 'font-awesome/css/font-awesome.css'
import axios from 'axios/dist/axios.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


