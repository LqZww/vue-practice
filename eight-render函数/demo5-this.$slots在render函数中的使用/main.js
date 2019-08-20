
Vue.component('my-component', {
    render: function (createElement) {
        //返回的内容就是含有VNODE的数组
        var header = this.$slots.header
        var main = this.$slots.default
        var footer = this.$slots.footer
        return createElement('div', [
            createElement('header', header),
            createElement('main', main),
            createElement('footer', footer)
        ])
    }
})

var app = new Vue({
    el: '#app'
})