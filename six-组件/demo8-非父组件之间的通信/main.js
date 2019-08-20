//注册组件
Vue.component('my-acomponent', {
    template: '<div><button @click="handle">点击向B组件传递数据</button></div>',
    data: function () {
        return {
            aaa: '来自A组件内容',
            msg: '我是A中的msg'
        }
    },
    methods: {
        handle: function () {
            this.$root.bus.$emit('lala', this.aaa)
        }
    }
})
Vue.component('my-bcomponent', {
    template: '<div></div>',
    data: function () {
        return {
            msg: '我是B中的msg'
        }
    },
    created: function () {
        //A组件在实例创建的时候就监听事件,lala事件
        this.$root.bus.$on('lala', function (value) {
            alert(value)
        })
    }
})
Vue.component('child-component', {
    template: '<button @click="setFatherData">点击修改父亲数据</button>',
    data: function () {
        return {
            msg: '我是C中的msg'
        }
    },
    methods: {
        setFatherData: function () {
            this.$parent.msg = '数据已修改'
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        //bus中介
        bus: new Vue(),
        msg: '数据未修改',
        formchild: '还未拿到'
    },
    methods: {
        getChildData: function () {
            //用来拿子组件的内容
            this.formchild = this.$refs.a.msg
        }
    }
})