var app = new Vue({
    el: '#app',
    data: {
        arr: ['book', 'pen', 'pencil']
    },
    computed: {
        matchOO: function () {
            //参数代表要过滤的每一项
            return this.arr.filter(function (a) {
                return a.match('oo')
            })
        }
    },
    methods: {
        sortArr: function () {
            this.arr.sort(function (a, b) {
                //从小到大排序
                return a.length - b.length
            })
        },
        reverseArr: function () {
            this.arr.reverse()
        },
        //改变数组的指定项
        changeOne: function () {
            this.arr[0] = "car"
        },
        //改变数组长度
        changeArrLength: function () {
            this.arr.length = 1
        }
    }
})

//改变vue的第一项
Vue.set(app.arr, 1, "car")