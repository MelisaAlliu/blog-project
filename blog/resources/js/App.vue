<template>
    <div id="wrapper">
        <!-- sidebar -->
        <div class="sidebar" :class="{ showOverlay: overlayVisibility }">
            <span class="closeButton" @click="closeOverlay">&times;</span>

            <div class="logo">
                <p class="brand-title">
                    <span class="material-symbols-outlined icon">
                        diversity_2
                    </span>
                </p>
            </div>
            <div class="side-links">
                <ul>
                    <li>
                        <router-link :to="{ name: 'Home' }"
                            ><span class="material-symbols-outlined">
                                home </span
                            >Home</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeOverlay" to="blog"
                            ><span class="material-symbols-outlined">
                                diversity_2 </span
                            >Blog</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeOverlay" to="about"
                            ><span class="material-symbols-outlined">
                                help </span
                            >About</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeOverlay" to="contact"
                            ><span class="material-symbols-outlined">
                                call </span
                            >Contact</router-link
                        >
                    </li>

                    <li>
                        <router-link @click="closeOverlay" to="login"
                            ><span class="material-symbols-outlined">
                                passkey </span
                            >Login</router-link
                        >
                    </li>

                    <li>
                        <router-link @click="closeOverlay" to="register"
                            ><span class="material-symbols-outlined">
                                how_to_reg </span
                            >Register</router-link
                        >
                    </li>

                    <li>
                        <router-link @click="closeOverlay" to="dashboard"
                            ><span class="material-symbols-outlined">
                                dashboard </span
                            >Dashboard</router-link
                        >
                    </li>
                </ul>
            </div>

            <!-- sidebar footer -->
            <footer class="sidebar-footer">
                <div>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                </div>

                <small></small>
            </footer>
        </div>
        <!-- Menu Button -->
        <div class="menuButton" @click="showOverlay">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <!-- main -->
        <main class="container">
            <router-view></router-view>
        </main>

        <!-- Main footer -->
        <footer class="main-footer">
            <div>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
            </div>
            <small></small>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            overlayVisibility: false,
        };
    },
    methods: {
        showOverlay() {
            this.overlayVisibility = true;
        },
        closeOverlay() {
            this.overlayVisibility = false;
        },
    },
};
</script>

<style scoped>
.icon {
    font-size: 80px;
}

.material-symbols-outlined {
    margin-right: 10px;
}

.showOverlay {
    width: 100%;
    z-index: 5;
}
</style>
