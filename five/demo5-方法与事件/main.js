var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        handle: function (count) {
            console.log(count)
            count = count || 1
            this.count += count
        }
    }

})
