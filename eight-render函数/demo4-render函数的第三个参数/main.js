Vue.component('child', {
    //第三个参数可选---String、Array，代表子节点
    //作为我们构建函数的子节点来使用
    render: function (createElement) {
        return createElement('div', [
            createElement('h1', '我是h1标题'),
            createElement('h5', '我是h5标题')
        ])
    }
})

var app = new Vue({
    el: '#app'
})