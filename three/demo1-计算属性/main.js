//将：'123,456,789'变成'789,456,123'
var app = new Vue({
    el: '#demo',
    data: {
        text: '123,456,789'
    },
    //定义计算属性
    computed: {
        //如果计算属性直接跟一个function，默认的就是getter函数
        reverseText: function () {
            return this.text.split(',').reverse().join(',')
        },
        now: function () {
            return Date.now()
        }
    },
    methods: {
        thisTime: function () {
            return Date.now()
        }
    }
})