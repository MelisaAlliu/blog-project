<template>
    <div id="wrapper">
        <!-- Sidebar -->
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
                    src="../../public/images/image-4.png"
                    alt="Brain connectd wiht heart"
                    class="w-150 h-auto"
                />
            </div>

            <div class="side-links mt-10 ml-10">
                <ul>
                    <li class="my-8 mx-8">
                        <router-link
                            :to="{ name: 'Home' }"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined">home</span
                            >Home
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="blog"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined"
                                >diversity_2</span
                            >Blog
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="about"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined">help</span
                            >About
                        </router-link>
                    </li>
                    <li class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="contact"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined">call</span
                            >Contact
                        </router-link>
                    </li>
                    <li v-if="!loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="login"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined"
                                >passkey</span
                            >Login
                        </router-link>
                    </li>
                    <li v-if="!loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="register"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined"
                                >how_to_reg</span
                            >Register
                        </router-link>
                    </li>
                    <li v-if="loggedIn" class="my-8 mx-8">
                        <router-link
                            @click="closeOverlay"
                            to="dashboard"
                            class="flex items-center text-gray hover:text-white hover:translate-x-5"
                        >
                            <span class="material-symbols-outlined"
                                >dashboard</span
                            >Dashboard
                        </router-link>
                    </li>
                </ul>
            </div>

            <footer
                class="sidebar-footer absolute bottom-10 left-0 w-full mt-auto text-white text-center"
            >
                <div class="mt-10 space-x-4">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <small></small>
            </footer>
        </div>

        <div
            class="fixed top-2 left-2 z-10 cursor-pointer hidden menuButton"
            @click="showOverlay"
        >
            <div class="bar w-8 h-1 bg-white my-1"></div>
            <div class="bar w-8 h-1 bg-white my-1"></div>
            <div class="bar w-8 h-1 bg-white my-1"></div>
        </div>

        <main class="container">
            <router-view @update-sidebar="updateSidebar"></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            overlayVisibility: false,
            loggedIn: false,
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
    },
    mounted() {
        if (localStorage.getItem("authenticated")) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    },
};
</script>

<style scoped>
.sidebar {
    overflow-x: hidden;
    transition: width 0.5s;
    background-color: #111;
}
.showOverlay {
    width: 100%;
    z-index: 5;
}
@media (min-width: 768px) {
    .sidebar {
        width: 300px;
    }
}

@media (max-width: 768px) {
    img {
        width: 250px;
        height: auto;
    }
}
</style>
