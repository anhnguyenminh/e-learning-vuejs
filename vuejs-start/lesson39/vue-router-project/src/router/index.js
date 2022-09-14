import Vue from 'vue'
import Router from 'vue-router'
import singleBlog from '@/components/singleBlog.vue'
import showBlog from '@/components/showBlog.vue'
import addBlog from '@/components/addBlog.vue'
import listBlogs from '@/components/listBlogs.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blog/:id',
      component: singleBlog
    },
    {
      path: '/',
      name: 'ShowBlog',
      component: showBlog
    },
    {
      path: '/add',
      name: 'AddBlog',
      component: addBlog
    },
    {
      path: '/list',
      name: 'ListBlog',
      component: listBlogs
    }
  ]
})
