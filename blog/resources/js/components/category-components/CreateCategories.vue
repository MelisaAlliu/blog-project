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
                    <br />

                    <button class="add-post-btn bg-black" type="submit">
                        <i class="fa-solid fa-right-to-bracket"></i> Submit
                    </button>
                    <button
                        class="cancel-post-btn bg-red-900"
                        type="button"
                        @click="cancel()"
                    >
                        <i class="fa-solid fa-ban"></i>Cancel
                    </button>
                </form>
            </div>
            <div class="go-to-btn">
                <router-link :to="{ name: 'CategoriesList' }"
                    ><button class="index-categories">Categories List</button>
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

        cancel() {
            this.clearForm();
            this.$router.push({ name: "CategoriesList" });
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

.add-post-btn,
.cancel-post-btn {
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    width: 200px;
    border-radius: 5px;
}

.add-post-btn:hover {
    transform: translateY(-4px);
}

.index-categories {
    width: 200px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 20px;
    background-color: black;
}
.go-to-btn {
    text-align: center;
    margin-top: 20px;
}
</style>
