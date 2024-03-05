<template>
    <div class="wrapper">
        <div
            class="sidebar fixed top-0 left-0 h-screen transition-all duration-500"
            :class="{
                showOverlay: overlayVisibility,
                'w-0': !overlayVisibility,
            }"
        >
            <span
                class="closeButton text-white text-4xl ml-auto mt-4 mr-4 cursor-pointer"
                @click="closeOverlay"
            >
                &times;
            </span>

            <div class="logo mt-12 ml-10">
                <img
                    src="/public/images/logo.png"
                    alt="Brain connectd wiht heart"
                    class="w-150 h-auto pr-8"
                />
            </div>

            <div class="side-links mt-10 ml-10">
                <ul class="navigation-links">
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Home' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-house"></i>Home
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Blog' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-blog"></i>Blog
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'About' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-address-card"></i>About
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Contact' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-phone"></i>Contact
                        </router-link>
                    </li>
                    <li v-if="!loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Login' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-right-to-bracket"></i>Login
                        </router-link>
                    </li>
                    <li v-if="!loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Register' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-door-open"></i>Register
                        </router-link>
                    </li>
                    <li v-if="loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            :to="{ name: 'Dashboard' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <i class="fa-solid fa-dashboard"></i>
                            Dashboard
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="absolute top-2 left-2 z-10 cursor-pointer hidden menuButton"
            @click="showOverlay"
        >
            <div class="bar w-8 h-1 bg-white my-1"></div>
            <div class="bar w-8 h-1 bg-white my-1"></div>
            <div class="bar w-8 h-1 bg-white my-1"></div>
        </div>

        <main class="container">
            <router-view
                @update-sidebar="updateSidebar"
                @show-edit-success="showEditSuccess"
                :editSuccess="editSuccess"
                :key="$route.path"
            ></router-view>
        </main>

        <footer class="main-footer py-10 w-full mt-auto text-white text-center">
            <div>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                &nbsp;
                <a href=""><i class="fab fa-instagram"></i></a>
                &nbsp;
                <a href=""><i class="fab fa-twitter"></i></a>
            </div>
            <small>@MindfulHeartbeat.com</small>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";

export default defineComponent({
    name: "App",
    data() {
        return {
            overlayVisibility: false,
            loggedIn: false,
            editSuccess: false,
        };
    },
    methods: {
        showOverlay() {
            this.overlayVisibility = true;
        },
        closeOverlay() {
            this.overlayVisibility = false;
        },
        updateSidebar() {
            this.loggedIn = !this.loggedIn;
        },
        showEditSuccess() {
            this.editSuccess = true;
        },
    },
    mounted() {
        if (localStorage.getItem("authenticated")) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    },
    computed: {
        $route(): RouteLocationNormalizedLoaded {
            return useRoute();
        },
    },
});
</script>

<style scoped>
.sidebar {
    overflow-x: hidden;
    transition: width 0.5s;
    background-color: #111;
}
.showOverlay {
    width: 100%;
    z-index: 1000;
}

.side-links {
    display: flex;
    justify-content: center;
    margin-right: 35px;
}

@media (min-width: 768px) {
    .sidebar {
        width: 200px;
    }
}

@media (max-width: 768px) {
    img {
        width: 150px;
        height: auto;
        margin: auto;
    }
}
</style>
