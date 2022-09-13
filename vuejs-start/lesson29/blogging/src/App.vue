<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
    <list-blogs-view></list-blogs-view>
   
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlog from './components/showBlog';
import listBlogs from './components/listBlogs';

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blogs-view': listBlogs
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
