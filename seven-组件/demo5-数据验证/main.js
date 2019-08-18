//注册组件
Vue.component('myComponent', {
    props: ['myMsg'],
    template: '<div>{{abc}}</div>',
    data: function () {
        return {
            abc: this.myMsg
        }
    }
})
Vue.component('typeComponent', {
    props: {
        a: String,
        b: [String, Number],
        c: {
            type: Boolean,
            default: true
        },
        d: {
            type: Number,
            required: true
        },
        e: {
            type: Array,
            default: function () {
                return [999]
            }
        },
        //自定义一个验证函数
        f: {
            validator: function (value) {
                return value < 10
            }
        },
        g: {
            type: Function
        }
    },
    template: '<div>{{a}}--{{b}}--{{c}}--{{d}}--{{e[0]}}</div>',
    data: function () {
        return {
            abc: this.myMsg
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        a: '1',
        b: '666',
        c: true,
        d: 12345,
        e: [],
        f: 3,
        g: console.log()
    }
})