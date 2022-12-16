// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins'

Vue.config.productionTip = false
//应用插件
Vue.use(plugins)
 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
