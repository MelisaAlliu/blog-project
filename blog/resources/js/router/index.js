import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../components/AboutPage.vue";
import BlogPage from "../components/BlogPage.vue";
import ContactPage from "../components/ContactPage.vue";
import HomePage from "../components/HomePage.vue";
import SingleBlogPage from "../components/SingleBlogPage.vue";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import DashboardPage from "../components/DashboardPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/blog",
        name: "Blog",
        component: BlogPage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },

    {
        path: "/blog/:slug",
        name: "SinglePage",
        component: SingleBlogPage,
        props: true,
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage,
    },

    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },

    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardPage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
