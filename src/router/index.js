import Vue from 'vue'
import Router from 'vue-router'
import MonthCalendar from '@/components/MonthCalendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MonthCalendar',
      component: MonthCalendar
    }
  ]
})
