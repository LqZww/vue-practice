//注册组件
Vue.component('my-component', {
    template: '<div v-show="childshow">组件</div>',
    data: function () {
        return {
            message: '我是子组件的内容',
            childshow: true
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        message: '我是父组件的内容',
        childshow: false
    }
})