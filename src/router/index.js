import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
                path: '',
                name: 'index',
                component: () =>
                    import ('../pages/index.vue')
            },
            {
                path: '/class', //要跳转的路径
                name: 'class', //同上
                component: () =>
                    import ('../pages/class.vue') //本地地址
            },
            {
                path: '/shizi', //要跳转的路径
                name: 'shizi', //同上
                component: () =>
                    import ('../pages/shizi.vue') //本地地址
            },
            {
                path: '/taochan', //要跳转的路径
                name: 'taochan', //同上
                component: () =>
                    import ('../pages/taochan.vue') //本地地址
            },
            {
                path: '/information', //要跳转的路径
                name: 'information', //同上
                component: () =>
                    import ('../pages/information.vue') //本地地址
            },
            {
                path: '/class-two', //要跳转的路径
                name: 'class-two', //同上
                component: () =>
                    import ('../pages/class-two.vue') //本地地址
            },


        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../pages/Login')
    }
]

const isPro = process.env.NODE_ENV === 'production'


const router = new VueRouter({
    mode: isPro ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router