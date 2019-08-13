var app2 = new Vue({
    el: '#a',
    data: {
        msg: '我是app2里面的内容'
    }
})

var app1 = new Vue({
    el: '#demo',
    data: {
        package1: [
            {
                name: 'iPhone',
                price: 10000,
                count: 2
            }, {
                name: 'iPhone',
                price: 5000,
                count: 1
            }],
        package2: [
            {
                name: 'book',
                price: 100,
                count: 5
            }, {
                name: 'apple',
                price: 20,
                count: 50
            }],
    },
    computed: {
        prices: function () {
            var prices = 0
            for (var i = 0; i < this.package1.length; i++) {
                prices += this.package1[i].price * this.package1[i].count
            }
            for (var j = 0; j < this.package1.length; j++) {
                prices += this.package2[j].price * this.package2[j].count
            }
            return prices + '------' + app2.msg
        }
    }
})

