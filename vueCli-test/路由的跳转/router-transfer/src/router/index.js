import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FuckWorld from '@/components/FuckWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fuck',
      name: 'FuckWorld',
      component: FuckWorld
    }
  ]
})
