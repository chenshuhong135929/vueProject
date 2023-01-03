<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h1>当前数值的十倍：{{bigSum}}</h1>
        <h2>下方总人数是：{{personList.length}}</h2>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和奇数加</button>
        <button @click="incrementWait(n)">等会再加</button>
    </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from 'vuex'
export default {

name:'Count',
data(){
    return{
        n:1,//用户选择得数字
       
    }
},
computed:{
    //借组mapState生成计算属性，从state中读取数据，（对象写法）
  //  ...mapState({sum:'sum'})
    //借助mapState生成计算属性，从state中读取数据，（数组写法）
    ...mapState('CountOptions',['sum']),
    ...mapState('PersonOptions',['personList']),
        //借助mapGetters生成计算属性，从getters中读取数据，（数组写法）
    ...mapGetters('CountOptions',['bigSum'])
}
,
methods:{
    /* increment(){
       this.$store.commit('JIA',this.n)
    },
    decrement(){
        this.$store.commit('JIAN',this.n)
    }, */

    ...mapMutations('CountOptions',{increment:'JIA',decrement:'JIAN'}),
    /* incrementOdd(){
         this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
         this.$store.dispatch('jiaWait',this.n)
    } */
    ...mapActions('CountOptions',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
} 
,
mounted(){
    
}
}
</script>

<style>

</style>