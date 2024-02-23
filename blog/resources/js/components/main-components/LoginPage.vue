<template>
    <div
        id="backend-view"
        class="login-wrapper min-h-screen bg-cover bg-center flex items-center"
    >
        <form
            @submit.prevent="login"
            class="w-96 bg-white bg-opacity-25 rounded-lg p-8"
        >
            <h3 class="text-2xl text-white font-bold mb-4 text-center">
                Login Here
            </h3>

            <label for="email" class="block text-white mb-2"
                ><i class="fa-solid fa-envelope"></i>Email</label
            >
            <input
                type="text"
                id="email"
                v-model="fields.email"
                class="w-full h-10 rounded-md border border-gray-300 px-3 leading-6 focus:outline-none focus:border-blue-400"
            />
            <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
            <label for="password" class="block text-white mt-4 mb-2"
                ><i class="fa-solid fa-key"></i>Password</label
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
                <i class="fa-solid fa-right-to-bracket"></i> Log In
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

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Fields } from "../interfaces/Fields";
import { Errors } from "../interfaces/Errors";

export default defineComponent({
    data() {
        return {
            fields: {} as Fields,
            errors: {} as Errors,
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
                .catch((error: any) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
});
</script>

<style scoped>
#backend-view {
    background-image: url("../../../../public/images/background-image3.png");
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
