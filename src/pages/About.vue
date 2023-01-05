<template>
      <h2>我是About的内容</h2>
</template>

<script>
export default {
name:'About',
//通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
     console.log('beforeRouteEnter路由守卫',to,from);
              if(to.meta.isAuth){
              if(localStorage.getItem('token')==='chenshuhong'){
                next()
              }else{
                alert('数据不对，无权限查看')
              }
            }else{
              next()
            }
},
//通过路由规则，离开该组件时被调用
beforeRouteLeave(to, from, next) {
       console.log('beforeRouteLeave路由守卫',to,from);
       next()
},
}
</script>

<style>

</style>