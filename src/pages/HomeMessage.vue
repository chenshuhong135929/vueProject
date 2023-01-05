<template>
<div>
    <ul>
         <li  v-for="m  in  messageList"   :key="m.id">
              <!--跳转路由携带query参数：to的字符串写法
              <router-link  :to="`/home/home-message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->
              <!--跳转路由携带query参数：to的对象写法写法-->
              <router-link  :to="{
                  //path:'/home/home-message/detail',
                  name:'Detail',
                  query:{
                      id:m.id,
                      title:m.title
                  }
              }">携带query参数 {{m.title}}</router-link>
               <router-link  :to="{
                  //path:'/home/home-message/detail',
                  name:'Detail',
                  params:{
                      id:m.id,
                      title:m.title
                  }
              }">携带params参数{{m.title}}</router-link>
              <button @click="pushShow(m)">push查看</button>
              <button @click="replaceShow(m)">replace查看</button>
         </li>
         
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {
name :'HomeMessage',
data(){
    return{
        messageList:[
            {id:'001',title:'消息001'},
            {id:'002',title:'消息002'},
            {id:'003',title:'消息003'},
        ]
    }
},
methods:{
    pushShow(m){
      this.$router.push({
            name:'Detail',
           query:{
                      id:m.id,
                      title:m.title
              }
      })
    },
    replaceShow(m){
   
      this.$router.replace({
           name:'Detail',
           query:{
                      id:m.id,
                      title:m.title
              }
      })
    },
}
}
</script>

<style>

</style>