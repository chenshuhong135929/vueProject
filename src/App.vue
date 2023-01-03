<template>

   <div class="todo-container">
     <Count></Count>
     <Person></Person>
     <Category title="美食">
       <img  slot="n1" src="https://lmg.jj20.com/up/allimg/1114/040221103339/210402103339-8-1200.jpg">
       <img  slot="n2" src="https://lmg.jj20.com/up/allimg/1114/040221103339/210402103339-8-1200.jpg">
        <ul>
           <li v-for="(food , index) in  foods" :key="index">{{food}}</li>
        </ul>
    </Category>
     <button @click="gettestdata()">请求数据</button>
    <div class="todo-wrap">
     <MyHeader @addTodo="addTodo"/>
     <MyList :todos="todos"  :checkTodo="checkTodo"  :deleteObj="deleteObj"/>
     <MyFooter  :todos="todos" :updateObj="updateObj"  :cleanAll="cleanAll"/>
     <!--有两种实现方法，第一种直接绑定灵活性不高，第二种用mounted 灵活性高一点-->
     <!--<studen v-on:atguigu="getStudenName"/>-->
     <!--<studen ref="student"/>-->
      <Test/>
    </div>
  </div>
 
</template>

<script>
 
 

//引入主键
 
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import Studen from './components/Studen.vue'
import Test from './components/Test.vue'
import Category from './components/Category.vue'
import Count from  './components/Count.vue'
import Person from  './components/Person.vue'
import axios from 'axios'

    export default {
        name:'App',
        components:{
         MyHeader ,
         MyList,
         MyFooter,
                Studen,
                Test,
                Category,
                Count,
                Person
        }
        ,
    data(){
        return {
          todos: JSON.parse(localStorage.getItem('todos'))  ||  []  ,
          foods:['火锅','烧烤','小龙虾','牛排'],
          games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
          films:['《教父》','《拆弹专家》','《你好》','《尚硅谷》']
           
        }
    },
        
        methods:{

          gettestdata(){
            axios.get('http://192.168.1.4:8000/m2micro-auth/sys/login?password=123456&username=admin').then(
              response=>{
                console.log('请求成功',response.data)
              },
              error=>{
                console.log('请求成功',error.message)
              }
            )
          }
          ,
          getStudenName(name){
            console.log('获取学生name',name)
          }
          ,
          //添加
          addTodo(x){
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
        },
        mounted() {
         // console.log('app',this)
          this.$refs.student.$on('atguigu',this.getStudenName)
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