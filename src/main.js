import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate, { Validator } from 'vee-validate';
// 方法1 to zh-CN
// import zh from 'vee-validate/dist/locale/zh_CN';

// 方法二 to zh-CN
import './local/index';

Vue.use(VeeValidate);
// 方法1 to zh-CN
// Validator.localize('zh-CN', zh);
const validator = new Validator();
validator.localize('zh-CN');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');