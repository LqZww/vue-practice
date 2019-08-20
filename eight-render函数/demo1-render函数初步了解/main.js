//注册组件
// Vue.component('child', {
//     props: ['level'],
//     template: '#hdom'
// })

//使用render函数定义
Vue.component('child', {
    render: function (creatElement) {
        return creatElement('h' + this.level, this.$slots.default)
    },
    props: ['level']
})


var app = new Vue({
    el: '#app',
    data: {
        level: 2
    }
})