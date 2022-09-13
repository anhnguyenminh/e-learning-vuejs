<template>
    <div v-theme:column="'wide'" id="show-blog">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div v-rainbow class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
            <h2>{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snipped }}</article>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    data() {
        return {
            blogs: [],
            search: ''

        }
    }, methods: {

    },
    created() {
        // this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
        //     console.log(data);
        // this.blogs = data.body.slice(0, 10);
        // });
        const a = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                a.blogs = response.data.slice(0, 10);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().match(this.search);
            });
        }
    }
}
</script>
  
<style>
#show-blog {
    max-width: 800px;
    margin: 0px auto;
    color: #fff;
}

#show-blog h1 {
    text-align: center;
    color: #000;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
  