import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
// import Forget from '../views/Forget.vue'

// 懒加载
const Login = () =>
    import ( /* webpackChunkName: 'Login' */ '../views/Login.vue')
const Register = () =>
    import ( /* webpackChunkName: 'Register' */ '../views/Register.vue')
const Forget = () =>
    import ( /* webpackChunkName: 'Forget' */ '../views/Forget.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/forget',
        name: 'forget',
        component: Forget
    }
]

const router = new VueRouter({
    routes
})

export default router