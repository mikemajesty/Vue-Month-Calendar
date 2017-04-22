import Vue from 'vue'
import Router from 'vue-router'
import VueMonthCalendar from '@/components/MonthCalendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueMonthCalendar',
      component: VueMonthCalendar
    }
  ]
})
