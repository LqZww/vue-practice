//在月份，日期，小时小于10时补0
var plusDate = function (value) {
    return value < 10 ? '0' + value : value
}
var app = new Vue({
    el: "#dateApp",
    data: {
        date: new Date(),
        apple: '苹果',
        banana: '<span style="color:yellow;">香蕉</span>',
        className: 'transRed',
        idName: 'transGreen',
        countnum: 0
    },
    //定义过滤器
    filters: {
        //这里的value就是需要过滤的数据
        formatDate: function (value) {
            //字符串转化为date类型
            var date = new Date(value)
            var year = date.getFullYear()
            var month = plusDate(date.getMonth() + 1)
            var day = plusDate(date.getDate())
            var hours = plusDate(date.getHours())
            var min = plusDate(date.getMinutes())
            var sec = plusDate(date.getSeconds())
            return year + '-' + month + '-' + day + '   ' + hours + ':' + min + ':' + sec
        }
    },
    methods: {
        count: function () {
            this.countnum = this.countnum + 1
        }
    },
    mounted: function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.date = new Date()
        }, 1000)
    },
    beforeDestroy: function () {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
})