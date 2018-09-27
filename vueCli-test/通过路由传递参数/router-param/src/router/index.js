import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FuckWorld from '@/components/FuckWorld'
import helloSb from '@/components/helloSb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello/:msg',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fuck/:msg',
      name: 'FuckWorld',
      component: FuckWorld
    },
    {
      path: '/helloSb',
      component: helloSb,
      props: () => ({ query: "卡卡卡" })
    }
  ]
})
