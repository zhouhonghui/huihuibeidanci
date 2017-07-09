<template>
  <div id="creat">
    <header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
    <div class="text">
    	Vue.js（读音 /vjuː/, 类似于view）是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。

    </div>
  </div>
</template>

<script>
import headerLg from '../components/header-lg.vue'

export default {
  name:'creat',
  components: {
  		headerLg
  	},
  methods:{
  	goIndex:function(){
  		this.$router.push({path:'/'})
  	}
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
#creat{
  width:100%;
  height:800px;
  background:@orange;
}
</style>
