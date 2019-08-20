Vue.component('child', {
    //第一个参数必选
    //1、String--->html标签
    //2、Object--->一个含有数据选项的对象
    //3、Function--->方法返回含有数据选项的对象
    render: function (createElement) {
        // return createElement('h1')

        // return createElement({
        //     template: '<div>11111</div>'
        // })

        var domFun = function () {
            return {
                template: '<div>22222</div>'
            }
        }
        return createElement(domFun())
    }
})

var app = new Vue({
    el: '#app'
})