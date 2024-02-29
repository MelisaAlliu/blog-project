<template>
    <div class="create-categories bg-white">
        <div id="contact-us">
            <DashboardButton />
            <h1 class="text-black text-center text-4xl font-bold">
                Create New Category!
            </h1>

            <div class="success-msg text-green-600" v-if="success">
                <i class="fa fa-check"></i>
                Category created successfully
            </div>
            <div class="contact-form">
                <form @submit.prevent="submit">
                    <label for="name"><span>Name</span></label>
                    <input
                        type="text"
                        id="name"
                        v-model="field.name"
                        class="border border-black"
                    />
                    <span v-if="errors.name" class="error text-red-600">{{
                        errors.name[0]
                    }}</span>

                    <input
                        type="submit"
                        value="Submit"
                        class="bg-black text-white border rounded-md p-2 mt-4 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black hover:shadow-lg"
                    />
                </form>
            </div>
            <div>
                <router-link :to="{ name: 'CategoriesList' }"
                    >Categories List <span>&#8594;</span></router-link
                >
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Fields } from "../interfaces/Fields";
import { Errors } from "../interfaces/Errors";
import DashboardButton from "../main-components/helper-components/DashboardButton.vue";

export default defineComponent({
    components: { DashboardButton },
    data() {
        return {
            field: {} as Fields,
            errors: {} as Errors,
            success: false,
        };
    },
    methods: {
        submit() {
            axios
                .post("/api/categories/create", this.field)
                .then(() => {
                    this.field = Object.assign({}, this.field);
                    this.errors = {} as Errors;
                    this.success = true;

                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
});
</script>

<style scoped>
.create-categories {
    height: 100vh;
}
.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 20px;
    font-size: 16px;
}
h1 {
    text-align: center;
    padding: 40px 0 50px 0;
}

.add-post-btn {
    background-color: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    width: 200px;
}

.add-post-btn:hover {
    transform: translateY(-4px);
}
</style>
