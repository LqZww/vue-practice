//注册组件
Vue.component('son-component', {
    template: '<div>\
                <button @click="handleincrease">+1</button>\
                </div>',
    data: function () {
        return {
            count: 3000
        }
    },
    methods: {
        handleincrease: function () {
            this.count = this.count + 1
            this.$emit('input', this.count)
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        total: 3000
    }
})