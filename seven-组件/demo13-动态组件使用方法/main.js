//注册组件
Vue.component('compA', {
    template: '<div>1哈哈哈</div>'
})
Vue.component('compB', {
    template: '<div>2呜呜呜</div>'
})
Vue.component('compC', {
    template: '<div>3哎哎哎</div>'
})
Vue.component('compD', {
    template: '<div>4嘻嘻嘻</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        thisView: 'compA'
    },
    methods: {
        handleView: function (tag) {
            this.thisView = 'comp' + tag
        }
    }
})