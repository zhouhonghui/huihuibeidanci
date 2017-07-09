// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// require("!style!css!less!./assets/css/main.less");


import index from './pages/index.vue'
import creat from './pages/creat.vue'

const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:index},
		{path:'/creat',component:creat}
	]
})

/* eslint-disable no-new */
var vm=new Vue({
  router,
  store,
  template:`
  		<div>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
  		</div>
  `,
  beforeCreate:function(){
  	if(this.$store.state.newbi==1){
  		router.push({path:'/'})
  	}else{
  		router.push({path:'/creat'})
  	}
  }
}).$mount('#app')
