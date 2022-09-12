new Vue({
    el: '#vue-app',
    data: {
        // name: 'Shaun',
        // job: 'Ninja',
        // website: 'https://baomoi.com/',
        // websiteTag: '<a href="https://baomoi.com/">The Net Ninja</a>'
        number: 10,
        x: 0,
        y: 0
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.job;
        },

        add(inc) {
            this.number += inc;
        },

        sub: function (inc) {
            this.number -= inc;
        },

        updateXY(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('You clicked here');
        }
    }
});
