<template>
    <main class="create-post">
        <div class="container">
            <DashboardButton />
            <h1>Create Posts!</h1>
            <div class="success-msg" v-if="success">
                <i class="fa fa-check"></i>
                Post created successfully
            </div>
            <div class="contact-form">
                <form @submit.prevent="submit">
                    <label for="title"><span>Title</span></label>
                    <input type="text" id="title" v-model="fields.title" />
                    <span v-if="errors.title" class="error">{{
                        errors.title[0]
                    }}</span>
                    <br />

                    <label for="image"><span>Image</span></label>
                    <input type="file" id="image" @input="grabFile" />
                    <span v-if="errors.file" class="error">{{
                        errors.file[0]
                    }}</span>
                    <div class="preview">
                        <img :src="url" alt="" />
                    </div>
                    <br />

                    <label for="categories"
                        ><span>Choose a category:</span></label
                    >
                    <select v-model="fields.category_id" id="categories">
                        <option disabled value="">Select option</option>
                        <option
                            :value="category.id"
                            v-for="category in categories"
                            :key="category.id"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                    <span v-if="errors.category_id" class="error">{{
                        errors.category_id[0]
                    }}</span>
                    <br />

                    <label for="body"><span>Body</span></label>
                    <textarea id="body" v-model="fields.body"></textarea>
                    <span v-if="errors.body" class="error">{{
                        errors.body[0]
                    }}</span>

                    <input class="add-post-btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "axios";
import DashboardButton from "../DashboardButton.vue";
import { Errors } from "../interfaces/Errors";
import { Category } from "../interfaces/Category";

export default defineComponent({
    components: {
        DashboardButton,
    },
    data() {
        return {
            success: false,
            fields: {
                category_id: "",
                title: "",
                file: null as File | null,
                body: "",
            },
            errors: {} as Errors,
            url: "",
            categories: [] as Category[],
        };
    },
    methods: {
        grabFile(e: Event) {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                this.fields.file = file;
                this.url = URL.createObjectURL(file);
            }
        },
        submit() {
            const formData = new FormData();
            for (const key in this.fields) {
                if (key === "file" && !this.fields.file) continue;
                formData.append(
                    key,
                    this.fields[key as keyof typeof this.fields] as
                        | string
                        | Blob
                );
            }
            axios
                .post("/api/posts", formData)
                .then(() => {
                    this.fields = {
                        category_id: "",
                        title: "",
                        file: null,
                        body: "",
                    };
                    this.url = "";
                    this.success = true;
                    this.errors = {};
                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                    this.$router.push({ name: "DashboardPostsList" });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    this.success = false;
                });
        },
    },
    mounted() {
        axios
            .get("/api/categories")
            .then((response) => (this.categories = response.data))
            .catch((error) => {
                console.log(error);
            });
    },
});
</script>

<style scoped>
.create-post {
    background-color: #fff;
    padding: 0 3vw;
}
.container input,
textarea,
select {
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
    padding: 60px 0 50px 0;
}

.add-post-btn {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.add-post-btn:hover {
    transform: translateY(-4px);
}

.preview img {
    max-width: 100%;
    max-height: 120px;
}
</style>
