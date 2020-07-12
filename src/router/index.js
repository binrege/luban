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
                path: '/class',  //要跳转的路径
                name: 'class',   //同上
                component: () =>
                    import ('../pages/class.vue')  //本地地址
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