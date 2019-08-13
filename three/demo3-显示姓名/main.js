var app = new Vue({
    el: '#demo',
    data: {
        firstName: 'zhou',
        lastName: 'wanwen'
    },
    computed: {
        // fullName: function () {
        //     return this.firstName + this.lastName
        // }
        fullName: {
            get: function () {
                return this.firstName + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(',')
                this.firstName = names[0]
                this.lastName = name[1]
            }
        }
    }
})