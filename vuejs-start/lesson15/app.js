Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }} . <button v-on:click="changedName">Change name</button></p>',
    data: function () {
        return {
            name: 'Yoshino'
        }
    },
    methods: {
        changedName: function () {
            this.name = 'Mario';
        }
    }
});

new Vue({
    el: '#vue-app-one',

});

new Vue({
    el: '#vue-app-two',

});
