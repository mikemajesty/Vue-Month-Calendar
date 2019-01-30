# Vue Month Calendar - You can now choose dates without a calendar.
[![monthPNG.png](https://i.postimg.cc/65NkJYjY/monthPNG.png)](https://postimg.cc/t72SFtHx)

## Try it yourself.
[click here](https://month-calendar.herokuapp.com)

# How to install
```JavaScript
 npm install vue-month-calendar --save
```

# How to use
```JavaScript
import VueMonthCalendar from 'vue-month-calendar'

const currentDate = new Date()

new Vue({
  el: '#month-calendar',
  name: 'vue-month-calendar',
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
```

##### In your page use

```Html
  <vue-month-calendar id='month-calendar' locale='en-US' :options="options"></vue-month-calendar>
```
##### Dual list options

* **options.locale:**(optional): Application locale;
* **options.minYear:**(required): Min year that will be shown in the select options.;
* **options.maxYear:**(required): Min year that will be shown in the select options.;
* **options.initialDate:**(required): First day of month that you selected.;
* **options.finalDate:**(required): Last day of month that you selected.;

#### change month calendar
```
npm install -g nodemon
```
To execute your changes run the command ```npm run dev```

#### Used versions

##### vue 
version: `2.2.6`
##### vue-material
version: `^0.7.1` 
<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
