import Vue from 'vue'
import VueMonthCalendar from '@/components/MonthCalendar'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'vue-month-calendar',
  data: function () {
    return {
      options: {
        locale: 'pt-BR',
        minYear: new Date().getFullYear() - 7,
        maxYear: new Date().getFullYear()
      }
    }
  },
  components: {
    'VueMonthCalendar': VueMonthCalendar
  }
})
