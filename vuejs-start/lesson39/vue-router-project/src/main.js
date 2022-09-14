// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
