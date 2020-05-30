import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider } from 'vee-validate'

import './utils/veevalidate'

// 注册ValidationProvider全局组件
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')