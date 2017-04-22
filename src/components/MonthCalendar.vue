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
            <md-option v-for="year in loadYear" :value="year" :key="year">{{ year }}</md-option>
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

  const getMonths = () => {
    let months = []
    let currentDate = new Date()

    const capitalize = (list) => {
      return list.charAt(0).toUpperCase() + list.slice(1)
    }

    for (var cont = 0; cont < 12; cont++) {
      const date = new Date(currentDate.getFullYear(), cont, 1)
      months[cont] = {name: capitalize(date.toLocaleString(navigator.language, { month: 'long' })), date: date}
    }
    return months
  }

  export default {
    name: 'vue-month-calendar',
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        year: currentDate.getFullYear(),
        month: currentDate.toLocaleString(navigator.language, { month: 'long' })
      }
    },
    methods: {
      lessMonth: function () {
        let month = getMonths().filter((item) => {
          return item.name === this.month
        })
        month[0].date.setMonth(month[0].date.getMonth() - 1)
        this.month = month[0].date.toLocaleString(navigator.language, { month: 'long' })
      },
      plusMonth: function () {
        let month = getMonths().filter((item) => {
          return item.name === this.month
        })
        month[0].date.setMonth(month[0].date.getMonth() + 1)
        this.month = month[0].date.toLocaleString(navigator.language, { month: 'long' })
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
        return getMonths()
      },
      loadYear: function () {
        let years = []
        for (var cont = this.options.minYear; cont <= this.options.maxYear; cont++) {
          years.push(cont)
        }
        return years
      }
    }
  }
</script>


<style scoped>
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
</style>
