import Vue from 'vue'
import Router from 'vue-router'
import School from '@/components/School'
import Studen from '@/components/Studen'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'School',
      component: School
    }
    , {
      path: '/',
      name: 'Studen',
      component: Studen
    }
  ]
})
