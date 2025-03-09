import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/css/hello.scss'
// import 'public/test/test.js'
Vue.use(ElementUI)
/*new Vue({
  template: '<App />',
  components: { App }
}).$mount('#app')*/
// import '@/assets/js/b'
// import '@/assets/js/c'
import '@/assets/js/rem.js'
import '@/assets/css/hello.scss'
import overClose from '@/assets/js/overClose.js';
//    "ol": "7.3.0",
Vue.use(overClose);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
