<template>
    <div class="create-categories bg-white text-black">
        <div id="contact-us">
            <DashboardButton />
            <h1 class="text-center text-4xl font-bold">Create New Category!</h1>

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
                    <br />

                    <SubmitButton />
                </form>
            </div>
            <div class="go-to-btn">
                <router-link :to="{ name: 'CategoriesList' }"
                    ><button class="index">
                        Categories List <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </router-link>
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
import SubmitButton from "../main-components/helper-components/SubmitButton.vue";

export default defineComponent({
    components: { DashboardButton, SubmitButton },
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
                    this.clearForm();
                    this.success = true;

                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        clearForm() {
            this.field = {} as Fields;
            this.errors = {} as Errors;
        },
    },
});
</script>

<style scoped>
.create-categories {
    height: 100vh;
}
form {
    padding: 40px;
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
</style>
