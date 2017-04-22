import Vue from 'vue'
import Router from 'vue-router'
import MonthCalendar from 'component/MonthCalendar' // for heroku
//import MonthCalendar from '@/components/MonthCalendar' // for dev
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
