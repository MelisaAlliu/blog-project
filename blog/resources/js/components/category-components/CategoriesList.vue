<template>
    <div class="categories-list bg-white">
        <DashboardButton />
        <div class="success-msg" v-if="success">
            <i class="fa fa-check"></i>
            Deleted successfully
        </div>
        <h1 class="text-black text-center p-20 text-4xl font-bold">
            Categories List
        </h1>

        <div class="success-msg" v-if="editSuccess">
            <i class="fa fa-check"></i>
            Edited successfully
        </div>
        <div class="categories-cart">
            <div
                class="item"
                v-for="(category, index) in categories"
                :key="category.id"
            >
                <span
                    ><strong>Category number {{ index + 1 }}</strong></span
                >
                <p><strong>Category name:</strong> {{ category.name }}</p>
                <div>
                    <router-link
                        class="edit-link"
                        :to="{
                            name: 'EditCategories',
                            params: { id: category.id },
                        }"
                        ><i class="fa-solid fa-pen-to-square"></i
                        >Edit</router-link
                    >
                    <button class="delete-btn" @click="destroy(category.id)">
                        <i class="fa-solid fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div class="index-categories">
            <router-link :to="{ name: 'CreateCategories' }"
                >Create Categories <i class="fa-solid fa-arrow-right"></i
            ></router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Category } from "../interfaces/Category";
import DashboardButton from "../main-components/helper-components/DashboardButton.vue";

export default defineComponent({
    components: { DashboardButton },
    props: {
        editSuccess: Boolean,
    },
    data() {
        return {
            categories: [] as Category[],
            success: false,
        };
    },
    methods: {
        destroy(id: number) {
            if (confirm("Are you sure you want to delete this category?")) {
                axios
                    .delete(`/api/categories/${id}`)
                    .then(() => {
                        this.success = true;
                        setTimeout(() => {
                            this.success = false;
                        }, 2500);
                        this.fetchCategories();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        fetchCategories() {
            axios
                .get("/api/categories")
                .then((response) => (this.categories = response.data))
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.fetchCategories();
    },
});
</script>

<style scoped>
.categories-list {
    min-height: 100vh;
}
.categories-cart {
    margin: 0 20px;
    display: flex;
    flex-wrap: wrap;
}
.categories-list .item {
    color: black;
    padding: 20px;
    flex: 0 0 calc(33.33% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    max-width: 400px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #f3f3f3 30%, #aa9b72);
}

.categories-list .item p,
.categories-list .item div,
.categories-list .item {
    margin: 15px 8px;
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

.index-categories {
    text-align: center;
}
.edit-link {
    margin-right: 10px;
    color: white;
    padding: 10px;
    background-color: green;
    border-radius: 5px;
}
.delete-btn {
    color: white;
    padding: 7px;
    background-color: red;
    border-radius: 5px;
}
</style>
