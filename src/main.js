import Vue from 'vue'
import App from './App'
import router from './router'

//项目配置项
import 'assets/js/conf';



//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


//------------------路由拦截
//https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
	/*
	param:
	to    前往的路由地址信息
	from  当前的路由信息
	next  function
	*/
	
	//可以结合路由信息中 meta项判断路由跳转拦截

	next();
})