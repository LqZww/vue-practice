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
               </div>'
})


var app = new Vue({
    el: '#app',
    data: {

    }
})