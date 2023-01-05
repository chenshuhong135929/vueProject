import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import HomeMessage from '@/pages/HomeMessage'
import HomeNews from '@/pages/HomeNews'
import Detail from '@/pages/Detail'

Vue.use(Router)
 
const router = new Router({
  //mode:'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{title:'关于'}
    }
    , {
      path: '/home',
      name: 'home',
      component: Home,
      title:'主页',
      meta:{title:'主页'},
      children:[
        {
          path: 'home-message',
          name: 'HomeMessage',
          component: HomeMessage,
          meta:{isAuth:true,  title:'消息',},
          children:[
            {
              path: 'detail',
              name: 'Detail',
              component: Detail,
              meta:{isAuth:true,  title:'详情',},
            }
         /*    {
              path: 'detail/:id/:title',
              name: 'Detail',
              component: Detail,
              //props 的第一种写法，值为对象，该对象中的所有key-value都会以props形式传给Detail组件
              props:{a;1,b:'hello'}
              //props得第二种写法，值为boolean值，若boolean值为true,就会把路由组件收到得所有params参数，以props的形式传给Detail中
              props：true
              //props的第三种写法，值为函数
              props($route){
                return{
                  id:$route.query.id,
                  title:$route.query.title
                }
              }
            } */
           
          ]
        }
        , {
          path: 'home-news',
          name: 'HomeNews',
          component: HomeNews,
          meta:{ isAuth:true, title:'新闻',},
        //独享路由守卫
        /*   beforeEnter:(to,from,next)=>{
            console.log('独享路由守卫',to,from);
              if(to.meta.isAuth){
              if(localStorage.getItem('token')==='chenshuhong'){
                next()
              }else{
                alert('数据不对，无权限查看')
              }
            }else{
              next()
            }
          } */
        }
      ]
    }
    
  ]
})

//全局前置路由守卫---初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to,from,next)=>{

  console.log('前缀路由守卫',to,from);
  //if(to.path==='/home/home-message' || to.path === '/home/home-news'){
    if(to.meta.isAuth){
    if(localStorage.getItem('token')==='chenshuhong'){
      next()
    }else{
      alert('数据不对，无权限查看')
    }
  }else{
    next()
  }

})

//全局后置路由守卫---初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
  console.log('后缀路由守卫',to,from);
  document.title=to.meta.title || '操作系统'

})
export default router