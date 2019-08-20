var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        isBorder: true,
        isback: true,
        activeClass: 'active',
        errorClass: 'error'
    },
    computed: {
        classnames: function () {
            return {
                active: this.isActive && !this.isBorder
            }
        }
    },
    methods: {
        changeColor: function () {
            this.isback = !this.isback
        }
    }
})