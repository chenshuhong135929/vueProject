<template>
         <div class="demo" >
            <h2>{{msg}}</h2>
            <h2 @click="showDOM">学生姓名：{{name}}</h2>
            <h2>学生年龄：{{age}}</h2>
            
        </div>
</template>

<script>
import {hunhe} from  '../mixin'
export default {
    name:"Studen",
    data(){
    return {
            msg:'我是一个m2miro'
         }
    }
    ,
    // 简单接收
    // props:[ 'name','age']

    // 接收的同时对数据进行类型限制
    /*   props:{
        name:String,
        age:Number
      } */
    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
      props:{
        name:{
          type:String,//name 的类型
          required:true//是必要的
        },
        age:{
          type:Number,//name 的类型
          default:99 //默认值
        }
      }
     
    ,
        mixins:[hunhe]
  }
 
</script>

<style scoped>

.demo{
    background-color: blueviolet;
}

</style>