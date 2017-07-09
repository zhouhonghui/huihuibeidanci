import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state={
	newbi:'1'
}

// var state,xmlhttp
// xmlhttp=new XMLHttpRequest();
// xmlhttp.onreadystatechange=function(){
// 	if(xmlhttp.readystate==4 && xmlhttp.status==200){
// 		state=eval('('+xmlhttp.responseText+')')
// 	}else{
// 		state={serverIP:0}
// 	}
// }
// xmlhttp.open("GET","http://192.168.1.10/json/users.php",false);
// xmlhttp.send();

export default new Vuex.Store({
	state
})