<template>
  <div>
    <!-- <form-helper> -->
    <!-- <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph text for the slot</p> -->

    <!-- <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div> -->
    <!-- </form-helper> -->

    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">Show form One</button>
    <button @click="component = 'form-two'">Show form Two</button>
  </div>
</template>

<script>
// import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    // 'form-helper': formHelper
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      // title: 'I am a dynamic slot title'
      component: 'form-one'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
