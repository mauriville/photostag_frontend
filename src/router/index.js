import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal/Principal.vue'
import Image from '../views/Image/Image.vue'
import Tag from '../views/Tag/Tag.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Principal',
        component: Principal
    },
    {
        path: '/Image',
        name: 'Image',
        component: Image
    },
    {
        path: '/Tag',
        name: 'Tag',
        component: Tag
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
