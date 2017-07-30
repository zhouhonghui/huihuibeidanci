<template>
  <div id="creatSelet">
    <div class="head">
      请选择考试时间 <span @click="moreselet">更多</span>
    </div>
    <ul class="radio-lg">
      <p>2017年考试时间</p>
      <li class="radio active" id="data-2017-6-17" @click="dateSelect('data-2017-6-17')"><div>6月17日</div></li>
      <li class="radio noactive" id="data-2017-12-16" @click="dateSelect('data-2017-12-16')"><div>12月16日</div></li>
      <div class="more" v-show="more">
      <p>2018年考试时间</p>
        <li class="radio noactive" id="data-2018-6-17" @click="dateSelect('data-2018-6-17')"><div>6月17日</div></li>
      <li class="radio noactive" id="data-2018-12-16" @click="dateSelect('data-2018-12-16')"><div>12月16日</div></li>
      <p>2019年考试时间</p>
      <li class="radio noactive" id="data-2019-6-17" @click="dateSelect('data-2019-6-17')"><div>6月17日</div></li>
      <li class="radio noactive" id="data-2019-12-16" @click="dateSelect('data-2019-12-16')"><div>12月16日</div></li>
      </div>
    </ul>
    
    <bottomBtn value="开始吧" color="orange"></bottomBtn>
  </div>
</template>

<script>

import bottomBtn from '../components/bottomBtn.vue';

export default {
  name:'creat',
  data:function(){
      return {
        more:false
      }
  },
  components: {
  		
      bottomBtn
  	},
  methods:{
  	goIndex:function(){
  		this.$router.push({path:'/'})
  	},
    dateSelect:function(id){
      var obj=document.getElementsByClassName("radio");
      for(var i=0;i<obj.length;i++){
        obj[i].setAttribute("class","radio noactive")
      };
      document.getElementById(id).setAttribute("class","radio active");
      this.$parent.examTime=id.replace(/data-/g,'');
      console.log(this.$parent.examTime)
    },
    moreselet:function(){
      this.more=!this.more
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
#creatSelet{
  padding:15px;
}
.head{
  font-size:16px;
  color:#999;
  span{
    float:right;
  }
}
.radio-lg{
  padding:15px 0px;
  overflow:hidden;
  li{
    float:left;
    width:120px;
    height:120px;
    padding:5px;
    list-style:none;
    margin:10px 30px;
    div{
      text-align:center;
      line-height: 120px;
      width:100%;
      height:100%;
      font-size:18px;
    }
  }
  .active{
    border:1px solid @green;
    div{
      background:@green;
      color:#fff;
    }
  }
  .noactive{
    border:1px solid #fff;
    div{
      background:#ccc;
    }
  }
}

</style>
