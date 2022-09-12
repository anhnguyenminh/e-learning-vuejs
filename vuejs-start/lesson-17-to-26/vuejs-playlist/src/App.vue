<template>
  <div>
    <!-- <h1>{{title}}</h1>
    <ninjas></ninjas> -->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <my-ninjas v-bind:ninjas="ninjas"></my-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import Ninjas from './Ninjas.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MyNinjas from './components/MyNinjas.vue';
export default {
  data() {
    return {
      // title: "ninja app"
      ninjas: [
        { name: 'Ryo', speciality: 'Vue Components', show: false },
        { name: 'Yoshino', speciality: 'HTML Wizardry', show: false },
        { name: 'Asaki', speciality: 'Click Events', show: false },
        { name: 'Tomoe', speciality: 'Conditionals', show: false },
        { name: 'Hanna', speciality: 'Data Diggin', show: false },
        { name: 'Washimaru', speciality: 'Dynamic CSS', show: false }
      ],
      title: "Vue Ninjas"
    };
  },
  components: {
    'app-footer': Footer,
    'app-header': Header,
    'my-ninjas': MyNinjas
    // components: { 'ninjas': Ninjas }
  }, methods: {
    updateTitle: function (newTitle) {
      this.title = newTitle;
    }

  }

}
</script>

<style>

</style>