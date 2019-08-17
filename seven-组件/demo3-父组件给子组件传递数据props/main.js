var app = new Vue({
    el: '#app',
    data: {
        parentmsg: '哈哈哈哈'
    },
    components: {
        'child-component': {
            props: ['msg'],
            template: '<div style="border:1px solid green;height: 80px;">{{msg.length}}</div>',
            data: function () {
                return {
                    count: 1
                }
            }
        },
        'bind-component': {
            props: ['msg'],
            template: '<div style="border:1px solid green;height: 80px;">{{msg}}</div>',
            data: function () {
                return {
                    count: 1
                }
            }
        }
    }
})