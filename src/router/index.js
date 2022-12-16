import {createRouter, createWebHashHistory} from 'vue-router'
import BlogPage from "@/views/BlogPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import AddPost from "@/views/AddPost.vue"
import APost from "@/views/APost.vue"

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
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost
    },
    {
        path: "/:id",
        name: "APost",
        component: APost
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router