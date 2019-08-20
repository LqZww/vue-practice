Vue.component('child', {
    //第二个参数可选
    //第二个参数是数据对象---只能是Object
    render: function (createElement) {
        return createElement({
            template: '<div>11111111</div>'
        }, {
                'class': {
                    foo: true,
                    baz: false
                },
                style: {
                    color: 'red',
                    fontSize: '50px'
                },
                //正常的html特性
                attrs: {
                    id: 'foo',
                    src: 'https://zhouwanwen.top'
                },
                //用来写原生的DOM属性
                domProps: {
                    innerHTML: '<span style="color:yellow;font-size="20px">哈哈哈</span>'
                }
            })
    }
})

var app = new Vue({
    el: '#app'
})