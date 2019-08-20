Vue.component('my-component', {
    render: function (createElement) {
        return createElement('div', this.$scopedSlots.default({
            text: '子组件传递过来的数据',
            msg: 'scopetext'
        }))
    }
})

var app = new Vue({
    el: '#app',
    data: {

    }
})