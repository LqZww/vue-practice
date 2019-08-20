//this.text === context.props.text
//this.$slots.default === context.children
Vue.component('my-component', {
    functional: true,   //表示当前的vue实例无状态，无实例
    render: function (createElement, context) {
        return createElement('button', {
            on: {
                click: function () {
                    console.log('context:')
                    console.log(context)
                    console.log('context.parent:')
                    console.log(context.parent)
                    console.log('context.parent.value:')
                    console.log(context.props.value)
                }
            }
        }, '点击')
    },
    props: ['value']
})

var app = new Vue({
    el: '#app',
    data: {
        msg: '父组件的内容'
    }
})