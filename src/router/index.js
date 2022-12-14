import {createRouter, createWebHashHistory} from 'vue-router'
import BlogPage from "@/views/BlogPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage";
import ContactUsView from "@/views/ContactUsView";

const routes = [
    {
        path: '/',
        name: 'blog',
        component: BlogPage,
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
    },
    {
        path: "/contactus",
        name: 'contactus',
        component: ContactUsView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router