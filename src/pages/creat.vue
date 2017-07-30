<template>
  <div id="creat">
    <header-lg bigTitle="CET-4" noteTitle="四级单词记忆管理"></header-lg>
    <div class="text">
    	<p>
       大学英语四级考试，即CET-4，College English Test Band 4的缩写，是由国家教育部高等教育司主持的全国性教学考试。考试的主要对象是根据教育大纲修完大学英语四级的在校大学本科生或研究生。大学英语四、六级标准化考试自1986年末开始筹备，1987年正式实施。 
      </p>
      <p>
        英语四级考试目的是推动大学英语教学大纲的贯彻执行，对大学生的英语能力进行客观、准确的测量，为提高我国大学英语课程的教学质量服务。国家教育部委托“全国大学英语四、六级考试委员会”（1993年前名为“大学英语四、六级标准化考试设计组”）负责设计、组织、管理与实施大学英语四、六级考试。
      </p>
      <p>
        大学英语考试根据理工科本科和文理科本科用的两个《大学英语教学大纲》，由教育部（原国家教育委员会）高等教育司组织的全国统一的单科性标准化教学考试，分大学英语四级考试（CET-4）和大学英语六级考试（CET-6）两种。每年考试过后8月份或9月份公布成绩并颁发成绩单，根据教育部规定四六级考试不设置及格线，四级425分以上可以报考六级，所以大家普遍认为四六级的合格线为425分。英语四六级的总分为710分。报名时间CET全国英语四六级考试的考试时间为：每年6月份、12月份（每年时间略有不同）。
      </p>

    </div>
    <bottomBtn @click.native="goCreatSelet" value="创建计划" color="orange" class="bottom"></bottomBtn>
  </div>
</template>

<script>
import headerLg from '../components/header-lg.vue';
import bottomBtn from '../components/bottomBtn.vue';

export default {
  name:'creat',
  components: {
  		headerLg,
      bottomBtn
  	},
  methods:{
  	goCreatSelet:function(){
  		this.$router.push({path:'/creatSelet'})
  	}
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';

.text{
  padding:15px;
}
p{
  text-indent:2em;
  padding-bottom:15px;
  font-size:1.2rem;
  text-align: justify;
}
</style>
