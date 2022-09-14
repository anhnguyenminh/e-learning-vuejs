<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    methods: {

    },
    created() {

        const a = this;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (response) {
                // handle success
                console.log(response);
                a.blog = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

}
</script>
  
<style>
#single-blog{
    max-width: 960px;
    margin: 00 auto;
}
</style>
  