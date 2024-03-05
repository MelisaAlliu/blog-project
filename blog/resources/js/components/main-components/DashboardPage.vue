<template>
    <div
        id="backend-view"
        class="dashboard-wrapper text-center bg-cover bg-center h-screen relative"
    >
        <div class="logout absolute top-5 right-5">
            <button href="#" @click="logout" class="logout-btn text-white">
                <i class="fa-solid fa-right-from-bracket"></i>
                Log out
            </button>
        </div>
        <h1 class="heading text-black mt-20 mb-5 text-3xl font-bold">
            Welcome to Dashboard
        </h1>
        <span class="text-black text-xl">
            <i class="fa-solid fa-user"></i> {{ name }}</span
        >
        <div class="links mt-10 mx-auto bg-black max-w-md rounded-lg p-6">
            <ul>
                <li>
                    <router-link to="/posts/create" class="router-link">
                        Create Posts</router-link
                    >
                </li>
                <li>
                    <router-link
                        :to="{ name: 'DashboardPostsList' }"
                        class="router-link"
                    >
                        Posts list</router-link
                    >
                </li>
                <li>
                    <router-link to="/categories/create" class="router-link">
                        Create Categories</router-link
                    >
                </li>
                <li>
                    <router-link to="/categories" class="router-link">
                        Categories List</router-link
                    >
                </li>

                <li>
                    <router-link
                        :to="{ name: 'DashboardContactPage' }"
                        class="router-link"
                    >
                        Messages List</router-link
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

export default defineComponent({
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
            .catch((error: any) => {
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
                .catch((error: any) => {
                    console.log(error);
                });
        },
    },
    components: {
        RouterLink,
    },
});
</script>

<style scoped>
.links {
    border: 4px solid #aa9b72;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}
.links ul {
    list-style: none;
}

.links a {
    font-size: 26px;
    margin: 10px 0;
}
.links a:hover {
    color: white;
    transition: 0.3s;
}

#backend-view {
    height: 100vh;
    padding-top: 15vh;
    background-color: white;
}

.logout {
    position: absolute;
    top: 30px;
    right: 40px;
}
.logout-btn {
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}
.router-link {
    font-size: 20px;
    display: block;
    border-radius: 5px;
    color: #aa9b72;
    transition: 0.3s;
}
</style>
