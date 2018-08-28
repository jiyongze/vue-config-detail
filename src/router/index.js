import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const notFound = resolve => require.ensure([], () => resolve(require('@/pages/404')), '404')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '*', /* 当路由匹配不到路径是渲染404页面 */
      name: 'notFound',
      component: notFound
    }
  ]
})
