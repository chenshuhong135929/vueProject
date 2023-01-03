<template>
  <div>
      <h1>人员数据</h1>
      <h2>列表中第一个人的数据{{firstPersonName}}</h2>
      <h2>数组：{{sum}}</h2>
      <input type="text" v-model="name" placeholder="请输入名字">
      <button @click="add">添加</button>
      <button @click="addPersonsonWang">添加Wang</button>
      <ul>
          <li v-for=  "p   in personList" :key="p.id">{{p.name}} </li>
            
      </ul>
  </div>
</template>

<script>
import {mapState} from'Vuex'
import {nanoid} from 'nanoid'
export default {
name:'Person',

data(){
    return{
     name:''
    }
},
 computed:{
  /*   personList(){
        console.log('nininini',this.$store.state.personList);
        return this.$store.state.personList
    } */
    ...mapState('PersonOptions',['personList']),
    ...mapState('CountOptions',['sum']),
    firstPersonName(){
       
      return   this.$store.getters['PersonOptions/firstPersonName']
    }
} 
,
methods:{
    add(){
        const pObj= {id:nanoid(),name:this.name}
        console.log(pObj);
        this.$store.commit('PersonOptions/ADD',pObj)
        this.name=''

    },
    addPersonsonWang(){
         const pObj= {id:nanoid(),name:this.name}
        console.log(pObj);
        this.$store.dispatch('PersonOptions/addPersonsonWang',pObj)
        this.name=''
    }
}
}
</script>

<style>

</style>