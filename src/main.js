import Vue from 'vue'
import VueMonthCalendar from '@/components/MonthCalendar'

Vue.config.productionTip = false

/* eslint-disable no-new */
var currentDate = new Date()

new Vue({
  el: 'vue-month-calendar',
  data: function () {
    return {
      options: {
        minYear: currentDate.getFullYear() - 7,
        maxYear: currentDate.getFullYear(),
        initialDate: {},
        finalDate: {}
      }
    }
  },
  components: {
    'VueMonthCalendar': VueMonthCalendar
  }
})
