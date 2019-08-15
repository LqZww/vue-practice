var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        divclick: function () {
            alert('div被点击')
        },
        btnclick: function () {
            alert('button被点击')
        },
        hangle: function () {
            alert('不重载')
        },
        onceMethod: function () {
            alert('多少次了')
        },
        submitMe: function () {
            alert('按下了enter键')
        }
    }

})
