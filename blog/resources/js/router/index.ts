import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../components/AboutPage.vue";
import BlogPage from "../components/BlogPage.vue";
import ContactPage from "../components/ContactPage.vue";
import HomePage from "../components/HomePage.vue";
import SingleBlogPage from "../components/SingleBlogPage.vue";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import DashboardPage from "../components/DashboardPage.vue";
import CreateCategories from "../components/categories/CreateCategories.vue";
import CategoriesList from "../components/categories/CategoriesList.vue";
import EditCategories from "../components/categories/EditCategories.vue";
import CreatePosts from "../components/posts/CreatePosts.vue";
import DashboardPostsList from "../components/posts/DashboardPostsList.vue";
import EditPosts from "../components/posts/EditPosts.vue";

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
        meta: { requestGuest: true },
    },

    {
        path: "/login",
        name: "Login",
        component: LoginPage,
        meta: { requestGuest: true },
    },

    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardPage,
        meta: { requestAuth: true },
    },
    {
        path: "/categories/create",
        name: "CreateCategories",
        component: CreateCategories,
        meta: { requestAuth: true },
    },

    {
        path: "/categories",
        name: "CategoriesList",
        component: CategoriesList,
        meta: { requestAuth: true },
    },

    {
        path: "/categories/:id/edit",
        name: "EditCategories",
        component: EditCategories,
        props: true,
        meta: { requestAuth: true },
    },

    {
        path: "/posts/create",
        name: "CreatePosts",
        component: CreatePosts,
        meta: { requestAuth: true },
    },

    {
        path: "/dashboard-posts",
        name: "DashboardPostsList",
        component: DashboardPostsList,
        meta: { requestAuth: true },
    },

    {
        path: "/posts/:slug/edit",
        name: "EditPosts",
        component: EditPosts,
        meta: { requiresAuth: true },
        props: true,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = localStorage.getItem("authenticated");

    if (to.meta.requestGuest && authenticatedUser) {
        next({ name: "Dashboard" });
    } else if (to.meta.requestAuth && !authenticatedUser) {
        next({ name: "Login" });
    } else {
        next();
    }
});
export default router;
