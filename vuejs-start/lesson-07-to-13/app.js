new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false,
        error: false,
        success: false
    },
    methods: {

    },
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

new Vue({
    el: '#lesson9',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        // addToA: function () {
        //     console.log('add to A');
        //    return this.age + this.a;
        // },
        // addToB: function () {
        //     console.log('add to B');
        //    return this.age + this.b;
        // }
    },
    computed: { // when using computed property, just call name the method
        // no needs {} and needs to comment the same method name in methods
        addToA: function () {
            console.log('add to A');
            return this.age + this.a;
        },
        addToB: function () {
            console.log('add to B');
            return this.age + this.b;
        }
    }
});


new Vue({
    el: '#lesson12',
    data: {
        name: 'jack',
        characters: ['Mario', 'Luigi', 'Yoshino', 'Bowser', 'Athena'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshino', age: 18 },
            { name: 'Athena', age: 27 }
        ]
    },
    methods: {

    },
    computed: {

    }
});


new Vue({
    el: '#lesson13',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
});
