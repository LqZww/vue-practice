//注册组件
Vue.component('my-component', {
    props: ['msg', 'width'],
    template: '<div>{{count}}</div>',
    data: function () {
        return {
            count: this.msg
        }
    }
})
//width
Vue.component('width-component', {
    props: ['width'],
    template: '<div :style="style"></div>',
    data: function () {
        return {

        }
    },
    computed: {
        style: function () {
            return {
                width: this.width + 'px',
                background: 'red',
                height: '30px'
            }
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        width: 0
    }
})