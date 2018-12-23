import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes:[
        {path: '/index',component: resolve => require(['./../view/index.vue'], resolve),meta:{title:'首页'} },
        {path: '/login',component: resolve => require(['./../view/login.vue'], resolve),meta:{title:'登录'} },
        {path: '/pay',component: resolve => require(['./../view/pay.vue'], resolve),meta:{title:'支付页'}},
        {path: '/search',component: resolve => require(['./../view/search.vue'], resolve),meta:{title:'支付查询'}},
        {path: '/signed',component: resolve => require(['./../view/signed.vue'], resolve),meta:{title:'签约'}},
        {path: '/ChangePassword',component: resolve => require(['./../view/ChangePassword.vue'], resolve),meta:{title:'修改密码'}},
        {path: '/Paymentenquiry',component: resolve => require(['./../view/Paymentenquiry.vue'], resolve),meta:{title:'签约查询'}},
    ]
})
