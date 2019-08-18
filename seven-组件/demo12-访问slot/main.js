//注册组件
Vue.component('my-component', {
    template: '<div>\
                <slot>\
                    如果父组件没有内容，我就作为默认出现\
                </slot>\
               </div>'
})
Vue.component('name-component', {
    template: '<div>\
                <div class="header">\
                    <slot name="header">\
                    \
                    </slot>\
                </div>\
                <div class="container">\
                    <slot>\
                    \
                    </slot>\
                </div>\
                <div class="footer">\
                    <slot name="footer">\
                    \
                    </slot>\
                </div>\
               </div>',
    mounted: function () {
        //访问插槽
        var header = this.$slots.header
        var text = header[0].elm.innerText
        var html = header[0].elm.innerHTML
        console.log(header)
        console.log(text)
        console.log(html)
    }
})


var app = new Vue({
    el: '#app',
    data: {

    }
})