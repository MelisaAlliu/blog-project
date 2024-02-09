<template>
    <div
        id="backend-view"
        class="min-h-screen bg-cover bg-center flex items-center"
    >
        <form
            @submit.prevent="submit"
            class="w-96 bg-white bg-opacity-25 rounded-lg p-8"
        >
            <h3 class="text-2xl text-red-500 font-bold mb-4">Sign Up Here</h3>
            <label for="name" class="block text-white mb-2">Name</label>
            <input
                type="text"
                id="name"
                v-model="fields.name"
                class="w-full h-10 rounded-md border border-gray-300 px-3 leading-6 focus:outline-none focus:border-blue-400"
            />
            <span v-if="errors.name" class="error">{{ errors.name[0] }}</span>
            <label for="email" class="block text-white mt-4 mb-2">Email</label>
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
            <label
                for="password_confirmation"
                class="block text-white mt-4 mb-2"
                >Confirm password</label
            >
            <input
                type="password"
                id="password_confirmation"
                v-model="fields.password_confirmation"
                class="w-full h-10 rounded-md border border-gray-300 px-3 leading-6 focus:outline-none focus:border-blue-400"
            />
            <button
                type="submit"
                class="w-full mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
            >
                Sign Up
            </button>
            <span class="block mt-4 text-white"
                >Already have an account?
                <router-link to="login" class="text-blue-500"
                    >Log in</router-link
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
        submit() {
            axios
                .post("/api/register", this.fields)
                .then(() => {
                    this.$router.push({ name: "Dashboard" });
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
