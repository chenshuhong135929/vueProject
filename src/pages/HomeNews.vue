<template>
<div>
  <ul>
       <li :style="{opacity}">欢迎光临</li>
       <li>news001<input type="text"></li>
       <li>news002<input type="text"></li>
       <li>news003<input type="text"></li>
   </ul>
</div>
</template>

<script>
export default {
name:'HomeNews',
data(){
return{
  opacity:1
}
},
/* beforeDestroy(){
  console.log('组件被销毁了');
  clearInterval( this.time)
},
mounted(){
  this.time=setInterval(()=>{
    this.opacity-=0.01
    if(this.opacity<=0){
      this.opacity=1
    }
  },16)
  } */
  activated(){
      console.log('激活');
      this.time=setInterval(()=>{
      this.opacity-=0.01
      if(this.opacity<=0){
         this.opacity=1
      }
  },16)
  },
  deactivated(){
      console.log('失激活');
      clearInterval( this.time)
  }

}
</script>

<style>

</style>