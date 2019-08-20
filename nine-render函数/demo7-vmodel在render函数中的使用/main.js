Vue.component('my-component', {
    render: function (createElement) {
        debugger
        var self = this     //指的就是当前vue实例
        return createElement('input', {
            domProps: {
                value: self.name
            },
            on: {
                input: function (event) {
                    self.$emit('input', event.target.value)
                }
            }
        })
    },
    props: ['name']
})

var app = new Vue({
    el: '#app',
    data: {
        name: 'JACK'
    },
    // methods: {
    //     showName: function (value) {
    //         this.name = value
    //     }
    // }
})