<template>
  <div id="header-lg">
    <h3>{{bigTitle}}</h3>
    <h4>{{noteTitle}}</h4>
  </div>
</template>

<script>

export default {
  name: 'header-lg',
  props:['bigTitle','noteTitle']
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
#header-lg{
  
}
</style>
