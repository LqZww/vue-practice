Vue.directive('focus', {
    //指令的选项
    inserted: function (el) {
        el.focus()
    }
})
Vue.directive('zww', {
    //指令的选项
    bind: function (el, binding, vnode) {
        var keys = []
        for (var key in vnode) {
            keys.push(key)
        }
        el.innerHTML =
            'name' + '-----' + binding.name + '<br>' +
            'value' + '-----' + binding.value + '<br>' +
            'expression' + '-----' + binding.expression + '<br>' +
            'argument' + '-----' + binding.arg + '<br>' +
            'modifiers' + '-----' + JSON.stringify(binding.modifiers) + '<br>' +
            'vnode中的keys' + '-----' + keys.join("---") + '<br>'
    }
})
var app = new Vue({
    el: '#app',
    data: {
        obq: '自定义指令所绑定的值'
    }
})