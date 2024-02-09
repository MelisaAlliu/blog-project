<template>
    <div
        id="backend-view"
        class="min-h-screen bg-cover bg-center flex items-center"
    >
        <form
            @submit.prevent="login"
            class="w-96 bg-white bg-opacity-25 rounded-lg p-8"
        >
            <h3 class="text-2xl text-red-500 font-bold mb-4">Login Here</h3>
            <label for="email" class="block text-white mb-2">Email</label>
            <input
                type="text"
                id="email"
                v-model="fields.email"
                class="w-full h-10 rounded-md border border-gray-300 px-3 leading-6 focus:outline-none focus:border-blue-400"
            />
            <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
            <label for="password" class="block text-white mt-4 mb-2"
                >Password</label
            >
            <input
                type="password"
                id="password"
                v-model="fields.password"
                class="w-full h-10 rounded-md border border-gray-300 px-3 leading-6 focus:outline-none focus:border-blue-400"
            />

            <span v-if="errors.password" class="error">{{
                errors.password[0]
            }}</span>

            <button
                type="submit"
                class="w-full mt-6 text-white font-semibold py-2 px-4 rounded-md"
            >
                Log In
            </button>
            <span class="block mt-4 text-white"
                >Don't have an account?
                <router-link to="register" class="text-blue-500"
                    >Register</router-link
                ></span
            >
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            fields: {},
            errors: {},
        };
    },
    methods: {
        login() {
            axios
                .post("/api/login", this.fields)
                .then(() => {
                    this.$router.push({ name: "Dashboard" });
                    localStorage.setItem("authenticated", "true");
                    this.$emit("updateSidebar");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>

<style scoped>
#backend-view {
    background-image: url("../../../public/images/background-image3.png");
}

form {
    background-color: transparent;
    margin: 0 auto;
    border: 2px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}
form * {
    letter-spacing: 0.5px;
    outline: none;
}
button {
    background-color: #618da8;
}
.error {
    color: red;
}
</style>
