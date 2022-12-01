import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/components/home/index.vue'),
        // beforeEnter: (to, from, next) => {
        //     // ...
        //       if(from.path=='/Login') return next();
        //   },
    },
    {
        path: '/entry',
        name: 'entry',
        component: () => import('@/components/entry/entryview.vue'),

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/LoginView.vue'),
    },
    {
        path: '/reigster',
        name: 'reigster',
        component: () => import('@/components/reigster/index.vue'),
    },

    {
        path: '/modifybox',
        name: 'modifybox',
        component: () => import('@/components/modifybox/index.vue'),
    },
    {
        path: '/Edzl',
        name: 'Edzl',
        component: () => import('@/components/modify/Edzl.vue'),
    },
    {
        path: '/errorinfo',
        name: 'errorinfo',
        component: () => import('@/components/Error/Errorinfo.vue'),
        meta: {
            isShow: false,
            title: '错误',
        },
    },
    {
        path: '/:path(.*)',
        component: () => import('@/components/Error/Errorinfo.vue')
    },
    {
        path: '/',
        redirect: '/home'
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    let cookie = document.cookie.slice(6);
    // const token = localStorage.getItem('token')
    if (to.path == '/login' || to.path == '/reigster' || cookie ) {
        return next();
    } else {
        return next('/login')
    }
})
export default router;

