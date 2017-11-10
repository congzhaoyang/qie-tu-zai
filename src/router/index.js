import Vue from 'vue'
import Router from 'vue-router'
import HybridReportList from '@/components/HybridReportList'
import MyCom from '@/components/MyCom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HybridReportList',
      component: HybridReportList
    },
    {
      path: '/1',
      name: 'MyCom',
      component: MyCom
    }
  ]
})
