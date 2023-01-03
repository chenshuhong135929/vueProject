// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins'
//引入vuex
import Vuex from 'vuex'
//引入store
import store from './store'



Vue.config.productionTip = false


//应用插件
Vue.use(plugins)
 
 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
