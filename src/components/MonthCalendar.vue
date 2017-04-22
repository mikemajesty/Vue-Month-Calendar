<template lang="html">
  <md-layout md-gutter>
    <md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>
      <md-layout md-flex="10">
        <md-button class="md-raised" v-on:click.native="lessMonth">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-flex="30">
        <md-input-container>
          <label for="month">Month</label>
          <md-select name="month" v-model="month">
            <md-option v-for="month in filteringMonth" :value="month.name" :key="month.name">{{ month.name }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-raised" v-on:click.native="plusMonth">
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
    data () {
      return {
        year: currentDate.toLocaleString(navigator.language, { year: 'numeric' }),
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
