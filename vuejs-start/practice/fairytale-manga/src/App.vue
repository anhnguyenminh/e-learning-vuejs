<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
  import Login from '@/components/Login'
  import Register from '@/components/Register'
export default {
  components:{
    'login-section': Login,
    'register': Register
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;1,500;1,700&display=swap');
* {
  font-family: 'Alegreya', serif;
}
</style>
