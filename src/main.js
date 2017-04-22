import Vue from 'vue'
import VueMonthCalendar from '@/components/MonthCalendar'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'vue-month-calendar',
  data () {
    return {
      options: {
        minYear: 2011,
        maxYear: new Date().getFullYear()
      }
    }
  },
  components: {
    'VueMonthCalendar': VueMonthCalendar
  }
})
