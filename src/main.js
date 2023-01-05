// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

//elements-ui组件全部引入，文件过大，一般不会全部引入
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);


//按需引入
import { Button ,Row,DatePicker} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
Vue.config.productionTip = false 


/* import plugins from './plugins'
//引入vuex
import Vuex from 'vuex'
//引入store
import store from './store' */






/* //应用插件
Vue.use(plugins) */

 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
