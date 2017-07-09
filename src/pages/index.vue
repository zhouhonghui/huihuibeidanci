<template>
  <div id="index">
    <div @click="goCreat">my is index</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods:{
    goCreat:function(){
      this.$router.push({path:'/creat'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
#index{
  width:100%;
  height:800px;
  background:@green;
}
</style>
