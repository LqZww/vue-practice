var app = new Vue({
    el: '#app',
    data: {
        apple: 'apple',
        banana: 'banana',
        pineapple: 'pineapple',
        type: 'name',
        a: 3
    },
    methods: {
        toggleType: function () {
            //三目运算符
            this.type = (this.type === 'name' ? 'password' : 'name')
        }
    }
})