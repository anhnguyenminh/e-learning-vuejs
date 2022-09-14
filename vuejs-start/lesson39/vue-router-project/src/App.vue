<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blogs-view></list-blogs-view> -->

    <app-header></app-header>
    <!-- <router-link :to="{name: 'ShowBlog'}" >All</router-link>
    <router-link :to="{name:'ListBlog'}" >List Blog</router-link>
    <router-link :to="{name:'AddBlog'}" >Add new Blog</router-link> -->
    <router-view/>
   
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlog from './components/showBlog';
import listBlogs from './components/listBlogs';
import header from './components/header';
require('@/assets/css/style.css');


export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blogs-view': listBlogs,
    'app-header': header
  },
  data() {
    return {

    }
  }, methods: {

  }
}
</script>

<style>

</style>
