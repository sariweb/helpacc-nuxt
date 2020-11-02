import Vue from 'vue'

Vue.filter('dateformat', (value) => {
  return new Date(value).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
