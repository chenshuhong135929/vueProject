<template>
    <div class="demo">
         <h2 @click="showDOM">学校名称：{{name}}</h2>
         <h2>学校地址：{{address}}</h2>
         <button @click="showschool">点我显示学校名称</button>
        
    </div>
</template>

<script>
import {hunhe} from  '../mixin'

export default {
        name:'School',
        data(){
            return {
                 name:'sguigu',
                 address:'北京昌平'
            }
        },
        methods: {
            showschool(){
                alert(this.name)
            } 
       },
        mixins:[hunhe]
}

 
</script>

<style scoped>

.demo{
    background-color: orange;
}

</style>