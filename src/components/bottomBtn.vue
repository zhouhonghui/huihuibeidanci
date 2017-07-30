<template>
  <div id="bottomBtn">
    <button id="btn" :class="colorName">{{value}}</button>
  </div>
</template>

<script>

export default {
  name: 'bottomBtn',
  props:['color','value'],
  computed:{
    colorName:function(){
      if(this.color=='orange'){
        return this.colorName='orange'
      }else if(this.color=='green'){
        return this.colorName='green'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
#bottomBtn{
  width:100%;
  height:100px;
  background:rgba(255,255,255,.7);
  padding:25px 50px;
  box-sizing: border-box;
}
#btn{
  border:none;
  width:100%;
  height:50px;
  font-size:20px;
  letter-spacing: 2px;
  color:#fff;
  border-radius:@border-radius;
  outline: none;
}
.orange{
  background:@orange;
}
.green{
  background:@green;
}
</style>
