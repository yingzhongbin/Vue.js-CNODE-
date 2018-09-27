// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import HelloWorld from './components/HelloWorld'
Vue.config.productionTip = false
Vue.use(router)

var rt = new router({
  routes:[
    {
        path:'/hello',//指定要跳转的路径
        component:HelloWorld//指定要跳转的组件
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:rt,
  components: { App },
  template: '<App/>'
})
