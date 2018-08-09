import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '@/css/glob.scss';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')