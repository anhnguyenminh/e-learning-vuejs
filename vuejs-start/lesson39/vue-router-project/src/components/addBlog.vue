<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Fruits</label>
                <input type="checkbox" value="fruits" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Wiches</label>
                <input type="checkbox" value="wiches" v-model="blog.categories" />
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for=" author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            authors: ['The Net Ninjas', 'The Angular Avenger', 'The Vue Vindicator'],
            submitted: false

        }
    }, methods: {
        post: function () {
            // this.$http.post('https://jsonplaceholder.typicode.com/posts', {
            //     title: this.blog.title,
            //     body: this.blog.content,
            //     userId: 1
            // }).then(function (data) {
            //     console.log(data);
            //     this.submitted = true;
            // });
            
            const self = this;

            // axios.post('https://jsonplaceholder.typicode.com/posts', {
            //     title: self.blog.title,
            //     body: self.blog.content,
            //     userId: 1
            // })
            //     .then((response)=> {
            //         console.log(response);
            //         self.submitted = true;
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

                axios.post('https://my-blogging-project-7cf63-default-rtdb.firebaseio.com/posts',this.blog)
                .then((response)=> {
                    console.log(response);
                    self.submitted = true;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>
  
<style>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>
  