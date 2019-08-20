var app = new Vue({
    el: "#app",
    data: {
        msg: "开始了",
        a: "123"
    },
    created: function () {
        // alert('创建完成，但还未挂载到DOM')
    },
    mounted: function () {
        // alert('已经挂载到DOM')
    }
})

console.log(app.$el)
console.log(app.$data)