import Vue from 'vue'
import App from './App.vue'

// khai bao component global
// import Ninjas from './Ninjas.vue'
// Vue.component('ninjas', Ninjas);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
