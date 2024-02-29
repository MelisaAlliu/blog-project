<template>
    <div id="create-categories">
        <div id="contact-us">
            <h1 class="text-black text-center text-4xl font-bold">
                Edit Category!
            </h1>
            <div class="success-msg" v-if="success">
                <i class="fa fa-check"></i>
                Updated successfully
            </div>
            <div class="contact-form">
                <form @submit.prevent="submit">
                    <label for="name"><span>Name</span></label>
                    <input type="text" id="name" v-model="field.name" />
                    <span v-if="errors.name" class="error">{{
                        errors.name[0]
                    }}</span>

                    <input type="submit" value="Submit" />
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
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Fields } from "../interfaces/Fields";
import { Errors } from "../interfaces/Errors";

export default defineComponent({
    props: {
        id: Number,
    },
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
                .put(`/api/categories/${this.id}`, this.field)
                .then(() => {
                    this.field = Object.assign({}, this.field);
                    this.errors = {} as Errors;
                    this.success = true;
                    this.$emit("categoryEdited");
                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                    this.$router.push({ name: "CategoriesList" });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        fetchCategory() {
            axios
                .get(`/api/categories/${this.id}`)
                .then((response) => {
                    this.field = response.data;
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.$emit("updateSidebar");
                        localStorage.removeItem("authenticated");
                        this.$router.push({ name: "Login" });
                    }
                });
        },
    },
    mounted() {
        this.fetchCategory();
    },
});
</script>

<style scoped>
#create-categories {
    background-color: #f3f4f6;
    height: 90vh;
    padding: 50px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
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
