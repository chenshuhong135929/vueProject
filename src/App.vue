<template>
   <div class="todo-container">
    <div class="todo-wrap">
     <MyHeader :addTodo="addTodo"/>
     <MyList :todos="todos"  :checkTodo="checkTodo"  :deleteObj="deleteObj"/>
     <MyFooter  :todos="todos" :updateObj="updateObj"  :cleanAll="cleanAll"/>
    </div>
  </div>
</template>

<script>
 
//引入主键
 
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

    export default {
        name:'App',
        components:{
         MyHeader ,
         MyList,
         MyFooter
        }
        ,
    data(){
        return {
          todos: JSON.parse(localStorage.getItem('todos'))  ||  []  ,
         
        }
    },
        
        methods:{
          //添加
          addTodo(x){
            console.log('我是App组件，我收到了数据',x)
            this.todos.unshift(x)
            localStorage.setItem('todos',JSON.stringify(this.todos))
            
          },
          //取消
          checkTodo(id){
            this.todos.forEach((x)=>{
              if(x.id==id){
                x.done=!x.done
              }
            })
             localStorage.setItem('todos',JSON.stringify(this.todos))
          },
          //删除
          deleteObj(id){
           console.log(this.todos)
           this.todos=this.todos.filter(x=>x.id !== id)
           localStorage.setItem('todos',JSON.stringify(this.todos))
          }
          ,
          //跟新
          updateObj(done){
            this.todos.forEach((x)=> x.done=done)
           localStorage.setItem('todos',JSON.stringify(this.todos))
          },
          //清空选中的
          cleanAll(){
          this.todos=   this.todos.filter((x)=>{
              return !x.done
            })
           localStorage.setItem('todos',JSON.stringify(this.todos))
          }
        }
    }
     
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>