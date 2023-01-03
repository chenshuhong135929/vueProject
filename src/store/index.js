//该文件用于创建vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
import CountOptions from  './count'
import PersonOptions from  './person'
Vue.use(Vuex)




 
  
export default   new Vuex.Store({
    modules:{
        CountOptions,
        PersonOptions
    }
})

 