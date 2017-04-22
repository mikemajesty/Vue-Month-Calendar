import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'vue-month-calendar',
  router: router,
  data: function () {
    return {
      options: {
        mike: 'mike'
      }
    }
  },
  components: {
    'VueMonthCalendar': App
  }
})
