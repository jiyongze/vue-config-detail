import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 按需加载
// 配置404页面
const notFound = resolve => require.ensure([], () => resolve(require('@/pages/404')), '404')
const button1 = resolve => require.ensure([], () => resolve(require('@/pages/button_demo/button1')), 'button')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/button1',
      name: 'Button1',
      component: button1
    }, {
      path: '*', /* 当路由匹配不到路径时，渲染404页面 */
      name: 'notFound',
      component: notFound
    }
  ]
})
