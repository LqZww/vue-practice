//全局注册
//优点：所有的vue实例都可以用
//缺点：权限太大，容错率降低
Vue.component('my-component', {
    template: '<div>我是一个全局注册组件</div>'
})
var app = new Vue({
    el: '#app',
    data: {

    }
})

//局部注册
var bpp = new Vue({
    el: '#bpp',
    components: {
        'app-component': {
            template: '<div>我是一个局部注册组件</div>'
        }
    },
    data: {

    }
})