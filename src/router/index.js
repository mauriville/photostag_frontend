import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal/Principal.vue'
import Login from '../views/Login/Login.vue'
import Persona from '../views/Persona/Persona.vue'
import Usuario from '../views/Usuario/Usuario.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Principal',
        component: Principal
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
