<template>
    <div
        id="backend-view"
        class="text-center bg-cover bg-center h-screen relative"
    >
        <div class="logout absolute top-5 right-5">
            <a href="#" @click="logout" class="text-white">Log out</a>
        </div>
        <h1 class="heading text-white mt-20 mb-5 text-3xl font-bold">
            Dashboard
        </h1>
        <span class="text-white text-xl">Hi {{ name }}!</span>
        <div class="links mt-10 mx-auto bg-white max-w-md rounded-lg p-6">
            <ul>
                <li>
                    <router-link
                        to="/create-posts"
                        class="text-blue-500 text-lg"
                    >
                        Create Posts</router-link
                    >
                </li>
                <li>
                    <router-link
                        to="dashboard-posts"
                        class="text-blue-500 text-lg"
                    >
                        Posts list</router-link
                    >
                </li>
                <li>
                    <router-link
                        to="/categories/create"
                        class="text-blue-500 text-lg"
                    >
                        Create Categories</router-link
                    >
                </li>
                <li>
                    <router-link to="/categories" class="text-blue-500 text-lg">
                        Categories List</router-link
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
        };
    },
    mounted() {
        axios
            .get("/api/user")
            .then((response) => {
                this.name = response.data.name;
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.$emit("updateSidebar");
                    localStorage.removeItem("authenticated");
                    this.$router.push({ name: "Login" });
                }
            });
    },
    methods: {
        logout() {
            axios
                .post("/api/logout")
                .then(() => {
                    this.$router.push({ name: "Home" });
                    localStorage.removeItem("authenticated");
                    this.$emit("updateSidebar");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped>
.links ul {
    list-style: none;
}

.links a {
    font-size: 26px;
    display: inline-block;
    margin: 10px 0;
}

.logout a:hover {
    text-decoration: underline;
}

#backend-view {
    background-image: url("../../../public/images/background-image4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding-top: 15vh;
}

.logout {
    position: absolute;
    top: 30px;
    right: 40px;
}
</style>
