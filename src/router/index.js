import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Layout = () => import('../views/layout.vue')
const Home = () => import('../views/home.vue')
const List = () => import('../views/list.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({
            y: 0
        }),
        routes: [
            {
                path: '/',
                component: Layout,
                children: [
                    {
                        path: '/',
                        component: Home
                    },
                    {
                        path: '/list',
                        component: List
                    },
                    {
                        path: '/article',
                        component: Article
                    },
                    {
                        path: '/about',
                        component: About
                    },
                ]
            }
        ]
    })
}