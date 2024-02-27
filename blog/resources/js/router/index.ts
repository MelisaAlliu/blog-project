import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../components/main-components/AboutPage.vue";
import BlogPage from "../components/main-components/BlogPage.vue";
import ContactPage from "../components/main-components/ContactPage.vue";
import DashboardContactPage from "../components/contact-components/DashboardContactPage.vue";
import HomePage from "../components/main-components/HomePage.vue";
import SingleBlogPage from "../components/main-components/SingleBlogPage.vue";
import LoginPage from "../components/main-components/LoginPage.vue";
import RegisterPage from "../components/main-components/RegisterPage.vue";
import DashboardPage from "../components/main-components/DashboardPage.vue";
import CreateCategories from "../components/category-components/CreateCategories.vue";
import CategoriesList from "../components/category-components/CategoriesList.vue";
import EditCategories from "../components/category-components/EditCategories.vue";
import CreatePosts from "../components/post-components/CreatePosts.vue";
import DashboardPostsList from "../components/post-components/DashboardPostsList.vue";
import EditPosts from "../components/post-components/EditPosts.vue";

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

    {
        path: "/contact-info",
        name: "ContactInfo",
        component: DashboardContactPage,
        meta: { requiresAuth: true },
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
