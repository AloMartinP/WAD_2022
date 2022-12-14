import { createRouter, createWebHashHistory } from 'vue-router'
import BlogPage from "@/views/BlogPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage";

const routes = [
    {
        path: '/',
        name: 'blog',
        component: BlogPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpPage
    },
    {
        path: "/login",
        name: 'login',
        component: LoginPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router