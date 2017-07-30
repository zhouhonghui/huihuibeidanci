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
  padding:50px 30px;
  background:@green;
}
h3{
	font-size:1.8rem;
	color:#fff;
	padding-bottom:15px;
}
h4{
	font-size:1.5rem;
	color:#fff;
}
</style>
