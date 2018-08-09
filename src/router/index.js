import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/page/home'),
        meta: {}
    }]

})


export default router