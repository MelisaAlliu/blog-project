<template>
    <div id="create-categories" class="bg-white">
        <div id="contact-us">
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
                        class="mx-2 p-2 bg-black text-white cursor-pointer border rounded-lg"
                    />
                </form>
            </div>
            <div class="create-categories">
                <router-link :to="{ name: 'CategoriesList' }"
                    >Categories List <span>&#8594;</span></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            field: {},
            errors: {},
            success: false,
        };
    },

    methods: {
        submit() {
            axios
                .post("/api/categories/create", this.field)
                .then(() => {
                    this.field = {};
                    this.errors = {};
                    this.success = true;

                    setInterval(() => {
                        this.success = false;
                    }, 2500);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>

<style scoped>
#create-categories {
    height: 100vh;
    padding: 50px;
}
</style>
