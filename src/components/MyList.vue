<template>
    <ul class="todo-main">
      <transition-group appear name="Item">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"  :checkTodo="checkTodo" :deleteObj="deleteObj"/>
      </transition-group>
      </ul>
</template>

<script>

import MyItem from  './MyItem.vue'
export default {
    name:'MyList',
    props:['todos','checkTodo','deleteObj'],
   
    components:{
        MyItem
    }
}
</script>

<style scoped>

    .Item-enter-active{
        animation: atguigu 1s;
    }
    .Item-leave-active{
        animation: atguigu  1s reverse;
    }

   @keyframes atguigu {
       from{
           transform: translateX(-100%);
       }
       to{
           transform: translateX(0px);
       }
   }
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>