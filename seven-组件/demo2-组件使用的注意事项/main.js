var app = new Vue({
    el: '#app',
    components: {
        'app-component': {
            template: '<div>1111</div>'
        },
        'btn-component': {
            template: '<button @click="count++">{{count}}</button>',
            data: function () {
                return {
                    count: 0
                }
            }
        }
    },
    data: {
        count: 1
    },
    methods: {
        plus: function () {
            this.count++
        }
    }
})