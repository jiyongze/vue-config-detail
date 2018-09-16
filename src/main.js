// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iview组件
import iView from 'iView'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

// 开启debug模式
Vue.config.productionTip = false

// 忽略eslint的检查
/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点
  router, // 路由对象
  components: { App }, // 注册组件
  template: '<App/>' // 引入模板
})
