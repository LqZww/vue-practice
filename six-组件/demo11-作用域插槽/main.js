//注册组件
Vue.component('my-component', {
    template: `<div>
                <slot text="我是来自子组件的数据" a="aaaaa" name="abc">
                </slot>
               </div>`
})

var app = new Vue({
    el: '#app',
    data: {

    }
})