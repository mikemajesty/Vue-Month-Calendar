<template lang="html">
  <md-layout md-gutter>
    <md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>
      <md-layout md-flex="10">
        <md-button class="md-raised">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="30">
        <md-input-container>
          <label for="month">Month</label>
          <md-select name="month" v-model="month">
            <md-option v-for="month in filteringMonth" :value="month" :key="month">{{ month }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="30">
        <md-input-container>
          <label for="year">Year</label>
          <md-select name="year" v-model="year">
            <md-option value="2017">2017</md-option>
            <md-option value="2016">2016</md-option>
            <md-option value="2015">2015</md-option>
            <md-option value="2014">2014</md-option>
            <md-option value="2013">2013</md-option>
            <md-option value="2012">2012</md-option>
            <md-option value="2011">2011</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised">
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
  
  const getMonths = () => {
    var months = []
    var currentDate = new Date()

    const capitalize = (list) => {
      return list.charAt(0).toUpperCase() + list.slice(1)
    }

    for (var cont = 0; cont < 12; cont++) {
      months[cont] = capitalize(new Date(currentDate.getFullYear(), cont, 1).toLocaleString(navigator.language, { month: 'long' }))
    }
    return months
  }

  export default {
    name: 'MonthCalendar',
    data () {
      return {
        msg: 'Month Calendar',
        year: new Date().toLocaleString(navigator.language, { year: 'numeric' }),
        month: new Date().toLocaleString(navigator.language, { month: 'long' })
      }
    },
    methods: {
      teste: () => {
        return 'mike'
      }
    },
    computed: {
      filteringMonth: () => {
        return getMonths()
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

</style>
