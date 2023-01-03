<template>
  <div>
     <h3>{{title}}分类</h3>
     <slot name="n1"></slot>
     <slot name="n2"></slot>
  </div>
</template>

<script>
export default {
name:'Category',
props:['title']
}
</script>

<style>

</style>