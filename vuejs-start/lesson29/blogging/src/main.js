import Vue from 'vue'
import App from './App.vue'

// import VueResource from 'vue-resource'

// import axios from 'axios'

// Vue.use(VueResource);

// Custom Directive
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.backgroundColor = "#" + Math.random().toString().slice(2, 8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.backgroundColor = '#ddd';
      el.style.padding = '20px';
    }

  }
});

// Filter 
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase();
// });

Vue.filter('snipped', function (value) {
  return value.slice(0, 100) + '...';
});


new Vue({
  el: '#app',
  render: h => h(App)
})
