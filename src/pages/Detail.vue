<template>
  <div>
      <ul>
        <li>消息编码:{{this.$route.query.id}}</li>
        <li>消息标题:{{this.$route.query.title}}</li>
        <!--
        <li>消息编码:{{this.$route.params.id}}</li>
        <li>消息标题:{{this.$route.params.title}}</li>
        -->
      </ul>
     
  </div>
</template>

<script>
export default {
name:'Detail',
props:['id','title'],
mounted(){
    console.log(this.$route);
}
}
</script>

<style>

</style>