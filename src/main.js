import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider } from 'vee-validate'
import './utils/veevalidate'

// 注册ValidationProvider全局组件
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

// 在全局设置默认的baseurl
axios.defaults.baseURL =
    process.env.NODE_ENV !== 'production' ?
    'http://localhost:3000' :
    'http://your.domain.com'

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')