<template lang="html">
  <md-layout md-gutter class="vue-month-calendar">
    <md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>
      <md-layout md-flex="10">
        <md-button class="md-raised custom-height" v-on:click.native="lessMonth">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="30">
        <md-input-container>
          <label for="month">Month</label>
          <md-select name="month" v-model="month" class="center-align">
            <md-option v-for="month in loadMonth" :value="month.name" :key="month.name">{{ month.name }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised custom-height" v-on:click.native="plusMonth">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised custom-height" v-on:click.native="lessYear">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="30">
        <md-input-container>
          <label for="year">Year</label>
          <md-select name="year" v-model="year" class="center-align">
            <md-option v-for="year in loadYear" :value="year.name" :key="year.name">{{ year.name }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised custom-height" v-on:click.native="plusYear">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'

  Vue.use(VueMaterial)

  let currentDate = new Date()

  const capitalize = (list) => {
    return list.charAt(0).toUpperCase() + list.slice(1)
  }

  const filterByMonth = (month, locale) => {
    return getMonths(locale).filter((item) => {
      return item.name === capitalize(month)
    })
  }

  const getMonths = (locale) => {
    let months = []

    for (var cont = 0; cont < 12; cont++) {
      const date = new Date(currentDate.getFullYear(), cont, 1)
      months[cont] = {name: capitalize(date.toLocaleString(locale, { month: 'long' })), date: date}
    }
    return months
  }

  const setParameters = (month, year, locale) => {
    const initialDate = filterByMonth(month, locale)[0].date
    initialDate.setFullYear(year)
    return {
      initial: initialDate,
      final: new Date(year, initialDate.getMonth() + 1, 0)
    }
  }

  export default {
    name: 'vue-month-calendar',
    props: {
      options: {
        type: Object,
        required: true
      },
      locale: {
        type: String,
        required: false,
        default: navigator.language
      }
    },
    data () {
      return {
        year: currentDate.getFullYear(),
        month: capitalize(currentDate.toLocaleString(this.locale, { month: 'long' }))
      }
    },
    methods: {
      lessMonth: function () {
        let month = filterByMonth(this.month, this.locale)[0].date

        month.setMonth(month.getMonth() - 1)
        this.month = capitalize(month.toLocaleString(this.locale, { month: 'long' }))
      },
      plusMonth: function () {
        let month = filterByMonth(this.month, this.locale)[0].date

        month.setMonth(month.getMonth() + 1)
        this.month = capitalize(month.toLocaleString(this.locale, { month: 'long' }))
      },
      lessYear: function () {
        this.year = this.year === this.options.minYear ? this.options.maxYear : this.year -= 1
      },
      plusYear: function () {
        this.year = this.year === this.options.maxYear ? this.options.minYear : this.year += 1
      }
    },
    computed: {
      loadMonth: function () {
        return getMonths(this.locale)
      },
      loadYear: function () {
        let years = []
        for (var cont = this.options.minYear; cont <= this.options.maxYear; cont++) {
          years.push({name: cont})
        }
        return years
      }
    },
    watch: {
      month: function () {
        const date = setParameters(this.month, this.year, this.locale)
        this.options.initialDate = date.initial
        this.options.finalDate = date.final
      },
      year: function (year) {
        const date = setParameters(this.month, this.year, this.locale)
        this.options.initialDate = date.initial
        this.options.finalDate = date.final
      }
    },
    created: function () {
      this.options.initialDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
      this.options.finalDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    }
  }
</script>


<style lang="css">
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

  .vue-month-calendar .center-align {
    text-align: center;
  }

  .vue-month-calendar .custom-height {
    height: 45px;
  }
  
  .md-menu-content.md-select-content {
    top: 65px !important;
    margin-left: 0px !important;
  }
</style>
