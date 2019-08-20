Vue.component('my-component', {
    props: ['show'],
    render: function (createElement) {
        var imgsrc
        if (this.show) {
            imgsrc = './1.jpg'
        } else {
            imgsrc = './2.jpg'
        }
        return createElement('img', {
            attrs: {
                src: imgsrc
            },
            style: {
                width: '400px',
                height: '300px'

            }
        })
    }
})

var app = new Vue({
    el: '#app',
    data: {
        show: false
    },
    methods: {
        switchShow: function () {
            this.show = !this.show
        }
    }
})