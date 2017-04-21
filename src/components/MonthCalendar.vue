<template lang="html">
	<md-layout md-gutter>
		<md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>

			<md-input-container>
				<label class="hello">{{ msg }}</label>
        <md-input></md-input>
			</md-input-container>

		</md-layout>
	</md-layout>
</template>
<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'

  Vue.use(VueMaterial)

  export default {
    name: 'MonthCalendar',
    data () {
      return {
        msg: 'Month Calendar'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
